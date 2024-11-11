const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://kunalbharti299:kunalbharti299@dvmeet.ix7se.mongodb.net/"
  );
};

module.exports = connectDB;
