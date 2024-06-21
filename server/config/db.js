import mongoose from "mongoose";

const connectDB = async () => {
  const res = await mongoose.connect(
    "mongodb://localhost:27017/mern-auth-project"
  );

  if (res) {
    console.log("Connected Successfully");
  }
};

export default connectDB;
