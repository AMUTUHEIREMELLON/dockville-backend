const express = require("express");
const Car = require("../models/carModel");

const router = express.Router();

router.get("/car", (req, res) => {
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

router.get("/carlist", async (req, res) => {
  try {
    let items = await Car.find();
    const carCount = await Car.countDocuments();

    res.render("carlist.pug", { cars: items, carCount });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Sorry could not get cars" });
  }
});

// how to delete data from a database
router.post("/car/delete", async (req, res) => {
  try {
    await Car.deleteOne({ _id: req.body.id });
    res.redirect("/back");
  } catch (error) {
    res.status(400).send("Unable to delete item from the database");
  }
});

//    how to update data
router.get("/car/edit/:id", async (req, res) => {
  try {
    const car1 = await Car.findOne({
      _id: req.params.id,
    });
    res.render("editcar", { car: car1 });
  } catch (error) {
    res.status(400).send("Couldn't find car in database");
    console.log(error);
  }
});

router.post("/regcar/edit", async (req, res) => {
  try {
    await Car.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("/api/carlist");
  } catch (error) {
    res.status(400).send("Could not find car data");
    console.log(error);
  }
});

module.exports = router;
