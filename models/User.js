const mongoose = require("mongoose");
const { Schema } = mongoose;
const { defaultMargin, defaultMarkup } = require("./defaultValues");

const marginSchema = new Schema({
  key: String,
  text: String,
  value: String
});

const markupSchema = new Schema({
  key: String,
  text: String,
  value: String,
  markup: Number,
  marginPercent: String
});

const userSchema = new Schema(
  {
    googleId: String,
    margin: [marginSchema],
    markup: [markupSchema]
  }
);

userSchema.pre('save', function(next) {
  for (i = 0; i < defaultMargin.length; i++) {
    this.margin.push(defaultMargin[i]);
  };

  for (i = 0; i < defaultMarkup.length; i++) {
    this.markup.push(defaultMarkup[i]);
  };

  next();
});


mongoose.model("users", userSchema);