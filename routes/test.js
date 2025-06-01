const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Test działa!');
});

module.exports = router;