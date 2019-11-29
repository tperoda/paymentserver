const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true})
  .then(() => {
    console.log("Connected To Database");
  })
  .catch(err => {
    console.log("Error Connecting", err);
  });

const app = express();

app.use(bodyParser.json());
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 1000,
  keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/updateRates")(app);

if (process.env.NODE_ENV === "production") {
  // Express will serve Prod Assets
  app.use(express.static("paymentcalc/build"));
  // Express will serve index.html if route is unknown
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname, "paymentcalc", "build", "index.html"));
  });
};

const PORT = process.env.PORT || 5000;

app.listen(PORT);