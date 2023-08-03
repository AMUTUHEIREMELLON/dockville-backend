const express = require("express");
const Taxi = require("../models/taxiModel");


const router = express.Router();



router.get("/taxi",(req, res) =>{
  res.render("taxi")
});

router.post("/regtaxi", async (req, res) => {
  try {
    const taxi = new Taxi(req.body);
    await taxi.save();
    res.redirect("/api/taxi");
    console.log(req.body);
  } catch (error) {
    res.status(400).render("taxi");
    console.log(error);
  }
});

module.exports = router;