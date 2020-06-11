const mongoose = require('mongoose');

// entery of vechile

const Vehicle_entry_Schema = new mongoose.Schema({
  vehicleNo: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const report = mongoose.model('Vehicle_entry', Vehicle_entry_Schema);


module.exports = report;
