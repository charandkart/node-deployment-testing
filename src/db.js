import "dotenv/config";
import mongoose from "mongoose";

// import logger from "./lib/logger";

const connectionString = process.env.MONGODB;

export const initializeDB = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("Connected to MongoDB!!");
  } catch (error) {
    console.log("Failed to connect to MongoDB!!", error);
  }
};
