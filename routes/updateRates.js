const express = require("express");
const passport = require("passport");
const requireLogin = require("../middleware/requireLogin");

module.exports = app => {
  app.get("/api/get_margin", requireLogin, (req, res) => {
    // res.send(req.users);
    console.log(req.margin);
  });

  app.get("/api/get_markup", requireLogin, (req, res) => {
    // res.send(res.markup);
    console.log(req.markup);
  });

  app.post("/api/reset_margin", requireLogin, (req, res) => {
    const defaultRates = {
      key: "20",
      text: "20",
      value: "20"
    };

    req.user.margin.push(defaultRates);

    const user = req.user.save();
    res.send(user);
  })
};
