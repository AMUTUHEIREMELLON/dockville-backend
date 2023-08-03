const mongoose = require("mongoose");

const bodaSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  date:{
    type: Date,
  },
  time:{
    type: String,
  },
  slotnumber: {
    type: String,
  },
  nin: {
    type: String,
  }
});

module.exports = mongoose.model("boda", bodaSchema);
