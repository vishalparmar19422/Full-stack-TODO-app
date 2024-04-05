import mongoose from "mongoose";

const DB_CONNECT = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB connected")
  } catch (error) {
    console.log(error + "error while connecting to Database check DB_CONNECT");
    res.status(404).json("Error connecting to db");
  }
};
export default DB_CONNECT;