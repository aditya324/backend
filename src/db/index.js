import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config({ path: "./.env" }); // Ensure the path is correct

const connectToDB = async () => {
  try {
    // Construct the connection string
    const connectionString = `${process.env.MONGODB_URI}/${DB_NAME}`;

    // Connect to the MongoDB database
    const connectionInstance = await mongoose.connect(connectionString);

    console.log("MongoDB connected");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
};

export default connectToDB;
