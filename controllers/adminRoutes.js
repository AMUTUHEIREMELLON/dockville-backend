const express = require('express');
const Admin = require('../models/adminModel');
const passport = require('passport');
const router = express.Router();
// const adminModel = require('../models/adminModel');

router.get('/admin', (req, res) => {
  res.render('admin.pug');
});

router.post('/register', async (req, res) => {
  try{
    const admin = new Admin(req.body);
    console.log(req.body);
    await Admin.register(admin, req.body.password);
    res.redirect("/api/admin");
  }
  catch(error){
    res.status(400).send({message: "Failed to admin administrator."});
    console.log(error);
  }
});

router.get('/login', (req, res) => {
  res.render("login.pug");
});
router.post("/login", passport.authenticate("local", 
{faiureRedirect:"/api/login",}),
(req,res) => {
  req.session.user = req.user
  let loggedInUser = req.session.user.firstname
  console.log(loggedInUser)
  res.redirect("dash")
}
);




module.exports = router