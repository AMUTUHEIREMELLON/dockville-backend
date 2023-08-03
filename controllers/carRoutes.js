const express = require("express");
const Car = require("../models/carModel");

const router =express.Router();


router.get("/car",(req, res) =>{
  res.render("car.pug");
});


router.post("/regcar", async (req, res) => {
  try {
    const car = new Car(req.body);
    await car.save();
    res.redirect("/api/car");
    console.log(req.body);
  } catch (error) {
    res.status(400).render("car");
    console.log(error);
  }
});

module.exports = router;