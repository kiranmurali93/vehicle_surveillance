const express = require('express');

const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

router.get('/viewreport', ensureAuthenticated, (req, res) => { res.render('viewreport'); });

module.exports = router;
