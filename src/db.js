import "dotenv/config";
// import config from "config";
import mongoose from "mongoose";

import logger from "./lib/logger";

const connectionString = process.env.MONGODB_URI;
// const connectionString = config.get("mongodb_uri") || process.env.MONGODB_URI;

export const initializeDB = async () => {
  try {
    logger.info("Connecting to MongoDB Server");
    await mongoose.connect(connectionString);
    logger.info("Connected to MongoDB!!");
  } catch (error) {
    logger.error(`Failed to connect to MongoDB!! ${error}`);
  }
};
