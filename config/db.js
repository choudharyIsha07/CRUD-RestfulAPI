const mongoose = require("mongoose");
const colors = require("colors");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://stnw06:root@dombi1.pizwe7e.mongodb.net/Momta2"
      // "mongodb+srv://root:root@momta.wf246r6.mongodb.net/Momta"  ye mene use kri thi to ignore krna
    );
    console.log(`Connected to mongodb ${conn.connection.host}`.bgGreen);
  } catch (error) {
    console.log(`Mongodb Error ${error.message}`.bgCyan);
    process.exit(1);
  }
};

module.exports = connectDb;
