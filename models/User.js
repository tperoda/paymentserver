const mongoose = require("mongoose");
const { Schema } = mongoose;

const marginSchema = new Schema({
  key: {
    type: String,
    default: "20"
  },
  text: {
    type: String,
    default: "20"
  },
  value: {
    type: String,
    default: "20"
  }
});

const userSchema = new Schema(
  {
    googleId: String,
    margin: [marginSchema]
  }
);


mongoose.model("users", userSchema);