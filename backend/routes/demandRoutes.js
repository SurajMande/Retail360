const express = require('express');
const router = express.Router();
const { forecastDemand } = require('../controllers/demandController');

router.post('/', forecastDemand);

module.exports = router;
