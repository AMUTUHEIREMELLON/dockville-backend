const mongoose = require("mongoose");

const clinicSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,},

  lastname:{
    type: String,
    required: true,
    trim: true,
  },
  model: {
    type: String,
  },
  flexCheck:{
    type: Boolean,
  }
  })

  module.exports = mongoose.model("clinic", clinicSchema); 