require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection
  .on("open", () => console.log("Connected to mongodb"))
  .on("close", () => console.log("Disconnected from mongoose"))
  .on("error", (error) => console.log(error));

module.exports = mongoose;
