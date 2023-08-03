const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    unique: true,
  },
  numberplate: {
    type: String,
  },
  color: {
    type: String,
  },
  slotnumber: {
    type: String,
  }
});

module.exports = mongoose.model("car", carSchema);
