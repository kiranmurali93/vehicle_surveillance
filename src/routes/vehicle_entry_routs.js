const express = require('express');

const router = express.Router();
const vehicle_entered = require('../models/vehicle_entry')
const { ensureAuthenticated } = require('../config/auth');
// date
const currdatetime = new Date();

let hour = currdatetime.getHours();
hour = (hour < 10 ? '0' : '') + hour;

let min = currdatetime.getMinutes();
min = (min < 10 ? '0' : '') + min;

let sec = currdatetime.getSeconds();
sec = (sec < 10 ? '0' : '') + sec;

const year = currdatetime.getFullYear();

let month = currdatetime.getMonth() + 1;
month = (month < 10 ? '0' : '') + month;

let day = currdatetime.getDate();
day = (day < 10 ? '0' : '') + day;


router.post('/numberplate', ensureAuthenticated, (req, res) => {
    const { vehicleNo } = req.body;
    // const userId = User.id;
    const date = `${year}:${month}:${day}`;
    const time = `${hour}:${min}:${sec}`;
  
    if (!vehicleNo || !date || !time ) {
      req.flash(
        'error',
        'Some error has been occured',
      );
      console.log(vehicleNo, date, time);
      res.redirect('/');
    } else {
      const newvehicle = new vehicle_entered({
        vehicleNo,
        date,
        time,
      });
      console.log(newvehicle);
      newvehicle.save();
      req.flash(
        'success_msg',
        'New number has been entered into db',
      );
      res.redirect('/');
    }
  });
  

module.exports = router;
