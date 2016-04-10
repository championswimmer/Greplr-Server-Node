var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Yo here are your cabs');
});

module.exports = router;
