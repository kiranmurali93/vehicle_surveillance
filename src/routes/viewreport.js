const express = require('express');

const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

router.get('/viewreport', ensureAuthenticated, (req, res) => { res.render('viewreport'); });

router.post('/viewreport', ensureAuthenticated, (req,res) =>{
    
})

module.exports = router;
