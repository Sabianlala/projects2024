const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      "Database connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;

//e perdorim tani ne server.js const connectDb = require("./config/dbConnection");
//tani do krijojme schema per kontaktet -> rijojm folderin models -> contactModel.js