const express = require("express");
const Truck = require("../models/truckModel");

const router = express.Router();


router.get("/truck",(req, res) =>{
  res.render("truck.pug")
});


router.post("/regtruck", async (req, res) => {
  try {
    const truck = new Truck(req.body);
    await truck.save();
    res.redirect("/api/truck");
    console.log(req.body);
  } catch (error) {
    res.status(400).render("truck");
    console.log(error);
  }
});


module.exports = router;