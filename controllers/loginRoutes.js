const express = require("express");
const Login = require("../models/loginModel")
const router = express.Router();

router.get("/login",(req, res) => {
  res.render("login.pug");
});

router.post("/reglogin", async (req, res) => {
  try {
    const login = new Login(req.body);
    await login.save();
    res.redirect("/api/login");
    console.log(req.body);
  } catch (error) {
    res.status(400).render("login");
    console.log(error);
  }
});


module.exports = router;
