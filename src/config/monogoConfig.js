import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

export const connectMongoDB = async () => {
  console.log(process.env.MONGO_URL);
  try {
    const con = await mongoose.connect(process.env.MONGO_URL);

    con && console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
