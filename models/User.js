const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  margin: [
    {
      key: {
        type: String,
        default: ["20"]
      },
      text: {
        type: String,
        default: ["20"]
      },
      value: {
        type: String,
        default: ["20"]
      }
    }
  ]});

mongoose.model("users", userSchema);