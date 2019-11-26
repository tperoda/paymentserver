const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  margin: [
    {
      key: {
        type: String,
        value: "20"
      },
      text: {
        type: String,
        value: "20"
      },
      value: {
        type: String,
        value: "20"
      }
    }
  ]});

mongoose.model("users", userSchema);