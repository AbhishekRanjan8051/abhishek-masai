const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://abhishekranjan:abhishek123@cluster0.j9xgy.mongodb.net/web11?retryWrites=true&w=majority"
  );
};
