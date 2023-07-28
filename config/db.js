const mongoose = require("mongoose");
const colors = require("colors");

//setting up the connection
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://stnw06:root@dombi1.pizwe7e.mongodb.net/Momta2" //use your URL instead of this to connect to your mongodb database.
    );
    console.log(`Connected to mongodb ${conn.connection.host}`.bgGreen);
  } catch (error) {
    console.log(`Mongodb Error ${error.message}`.bgCyan);
    process.exit(1);
  }
};

module.exports = connectDb;
