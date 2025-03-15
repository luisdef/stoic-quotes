import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI as string;

if (!MONGO_URI) throw new Error("No MONGO_URI env found.");

export default async function dbConnect() {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      dbName: "stoic_quotes",
    });
    return conn;
  } catch (error) {
    console.error("MongoDB connection error: ", error);
    throw error;
  }
}
