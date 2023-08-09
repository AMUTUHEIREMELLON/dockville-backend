const express = require("express");
const router = express.Router();
const { ensureLoggedIn } = require("connect-ensure-login");



router.get("/dash", ensureLoggedIn("/api/login"), (req, res) => {
  res.render("dash.pug");
});

module.exports = router;
