require('dotenv').config();

const axios = require('axios');
const exp = require('express');
const router = exp.Router();

const url = `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`;

router.get('/', async(req, res) => {
  try {
    const response = await axios.get(url, {
      headers: {'User-Agent': 'request'}
    });
    // data is successfully parsed as a JSON object:
    const data = response.data;
    res.json(data);
  } catch (error) {
    if (error.response) {
      console.log('Status:', error.response.status);
    } else {
      console.log('Error:', error.message);
    }
  }
});

module.exports = router;