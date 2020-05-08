const mongoose = require('mongoose');

// enter type in the db

const VehicleSchema = new mongoose.Schema({
  vehicleNo: {
    type: String,
    required: true,
  },
  // userId: {
  //   type: String,
  //   required: true,
  // },
  type: {
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

const report = mongoose.model('VehicleNo', VehicleSchema);


module.exports = report;
