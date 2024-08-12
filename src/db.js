import "dotenv/config";
import mongoose from "mongoose";

// import logger from "./lib/logger";

const connectionString = process.env.MONGODB;

export const initializeDB = () => {
  mongoose.connect(connectionString, () => {
    console.log("Connected to MongoDB!!");
    // logger.info("Connected to MongoDB!!");
  });
};
