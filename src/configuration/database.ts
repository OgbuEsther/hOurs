import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect("mongodb+srv://Esther:Esther2004@cluster0.byfqhoj.mongodb.net/Esther_And_Chichi?appName=Cluster0");
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
