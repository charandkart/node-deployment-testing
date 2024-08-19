import "dotenv/config";
import path from "path";
import winston from "winston";
import fs from "fs";

const project_name = process.env.PROJECT || "project-name";
const { timestamp, label, colorize, combine, json, simple } = winston.format;

const logDir = `${path.resolve("./")}/logs`;

// Check if the log directory exists, create it if it doesn't
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logger = winston.createLogger({
  level: "info", // default logging level
  format: combine(
    colorize(),
    label({ label: project_name }),
    timestamp(),
    json()
  ),
  transports: [
    new winston.transports.Console({
      format: combine(
        colorize(),
        label({ label: project_name }),
        timestamp(),
        simple()
      ),
      handleExceptions: true,
    }),
    new winston.transports.File({
      filename: `${logDir}/combined.log`,
      handleExceptions: true,
    }),
    new winston.transports.File({
      filename: `${logDir}/error.log`,
      level: "error",
      handleExceptions: true,
    }),
  ],
  exitOnError: false, // do not exit on handled exceptions
});

logger.stream = {
  write: (message, encoding) => {
    logger.info(message);
  },
};
export default logger;
