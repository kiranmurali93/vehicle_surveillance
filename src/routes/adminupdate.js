// this file controlls the update db

const express = require('express');

const router = express.Router();

// const User = require('../models/User');
const Vehicle = require('../models/vehicle');

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


router.get('/updatedb', ensureAuthenticated, (req, res) => { res.render('updatedb'); });

router.post('/updatedb', ensureAuthenticated, (req, res) => {
  const { vehicleNo, type } = req.body;
  // const userId = User.id;
  const date = `${year}:${month}:${day}`;
  const time = `${hour}:${min}:${sec}`;
  console.log(req.body);
  const testvehicle = ({
    vehicleNo,
    type,
    date,
    time,
  });
  console.log(testvehicle);
  if (!vehicleNo || !date || !time || !type) {
    req.flash(
      'error',
      'Some error has been occured',
    );
    console.log(vehicleNo, date, time, type);
    res.redirect('/updatedb');
  } else {
    const newvehicle = new Vehicle({
      vehicleNo,
      type,
      date,
      time,
    });
    console.log(newvehicle);
    newvehicle.save();
    req.flash(
      'success_msg',
      'New number has been entered into db',
    );
    res.redirect('/updatedb');
  }
});

module.exports = router;
