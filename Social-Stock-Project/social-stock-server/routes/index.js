const express = require('express');
const router = express.Router();

const trendingTickersRoute = require('./trending_tickers');

router.use('/trending-tickers', trendingTickersRoute);

module.exports = router;