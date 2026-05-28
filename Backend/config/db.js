const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); //use process.env.LOCAL_DB to use local databases

    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err);

    process.exit(1);
  }
};

module.exports = connectDB;
