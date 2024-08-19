import "dotenv/config";
// import config from "config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { initializeDB } from "./db";
import routes from "./routes";
import logger from "./lib/logger";
import errorHandler from "./lib/error.handler";

initializeDB();

// const PORT = config.get("port") || process.env.PORT || 8000;
const PORT = process.env.PORT || 8000;
const app = express();

const httpReqLogFormat =
  ":method :url :status :res[content-length] - :response-time ms";
const httpReqLogger = morgan(httpReqLogFormat, { stream: logger.stream });

//Middlewears
app.use(cors()); // cross-platform use

app.use(express.json());
app.use(httpReqLogger);

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Success", data: "Home route 🎉 Working Good" });
});

app.get("/about", (req, res) => {
  res.status(200).json({ msg: "Success", data: "About route 🎉 " });
});

app.use("/api", routes);

app.use(errorHandler);

app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found!" });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
