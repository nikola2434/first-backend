import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connect: ${conn.connection.host}`.blue);
  } catch (error) {
    console.log(`Error MongoDB: ${error}`);
    process.exit(1);
  }
};
