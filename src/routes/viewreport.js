const express = require('express');

const router = express.Router();
const vehicle = require('../models/vehicle_entry')
const { ensureAuthenticated } = require('../config/auth');

router.get('/viewreport', ensureAuthenticated, (req, res) => { res.render('viewreport'); });

// pending..........
router.post('/viewreport', ensureAuthenticated, (req,res) =>{
    console.log(res.month);
    const date  = res.body;
    vehicle.vehiclenos.find({date}).then((vehicleno, date, time) =>{
        res.render('viewreport',{
            vehicleno,
            date,
            time
        });
    });
    console.log(date);
    res.render('viewreport',date);
})

module.exports = router;
