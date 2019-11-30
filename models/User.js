const mongoose = require("mongoose");
const { Schema } = mongoose;

const marginSchema = new Schema({
  key: String,
  text: String,
  value: String
});

const markupSchema = new Schema({
  key: String,
  text: String,
  value: String,
  markup: Number
});

const defaultMargin = [
  {
    key: "18",
    text: "18",
    value: "18"
  },
  {
  key: "20",
  text: "20",
  value: "20"
  },
  {
  key: "22",
  text: "22",
  value: "22"
  },
  {
  key: "25",
  text: "25",
  value: "25"
  },
];

const defaultMarkup = [
  {
    key: "21.96",
    text: "21.96",
    value: "21.96",
    markup: 1.135,
    margin: "18"
  },
  {
    key: "25",
    text: "25",
    value: "25",
    markup: 1.25,
    margin: "20"
  },
  {
    key: "28.2",
    text: "28.2",
    value: "28.2",
    markup: 1.282,
    margin: "22"
  },
  {
    key: "33.33",
    text: "33.33",
    value: "33.33",
    markup: 1.333,
    margin: "25"
  },
];

const userSchema = new Schema(
  {
    googleId: String,
    margin: [marginSchema],
    markup: [markupSchema]
  }
);

userSchema.pre('save', function(next) {
  if (!this._id) {
    defaultMargin.forEach(function(val) {
      this.margin.push(val);
    });
    defaultMarkup.forEach(function(val) {
      this.markup.push(val);
    });
  };

  next();
});


mongoose.model("users", userSchema);