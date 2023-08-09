const express = require("express");
const Clinic = require("../models/clinicModel");

const router =express.Router();


router.get("/clinic",(req, res) =>{
  res.render("clinic.pug");
});


router.post("/regclinic", async (req, res) => {
  try {
    const clinic = new Clinic(req.body);
    await clinic.save();
    res.redirect("/api/clinic");
    console.log(req.body);
  } catch (error) {
    res.status(400).render("clinic");
    console.log(error);
  }
});

router.get("/cliniclist", async (req, res) => {
  try {
    let items = await Clinic.find();
    res.render("cliniclist.pug", { clinics: items });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Sorry could not get clinics" });
  }
});

// how to delete data from a database
router.post("/clinic/delete", async (req, res) => {
  try {
    await Clinic.deleteOne({ _id: req.body.id });
    res.redirect("/back");
  } catch (error) {
    res.status(400).send("Unable to delete item from the database");
  }
});

//    how to update data
router.get("/clinic/edit/:id", async (req, res) => {
  try {
    const clinic = await Clinic.findOne({
      _id: req.params.id,
    });
    res.render("editclinic", {clinic: clinic});
  } catch (error) {
    res.status(400).send("Couldn't find clinic in database");
    console.log(error);
  }
});

router.post("/regclinic/edit", async (req, res) => {
  try{
    await Clinic.findOneAndUpdate({_id: req.query.id},req.body);
    res.redirect("/api/cliniclist")
  }
  catch(error){
    res.status(400).send("Could not find clinic data");
    console.log(error);
  }
});


module.exports = router;