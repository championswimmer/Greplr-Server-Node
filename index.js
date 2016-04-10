
var express = require('express');
var app = express();

app.get('/api/v1/cabs', function (req, res) {
  res.send('{ "jo" : "jojo" }');
});

app.listen(9000, function () {
  console.log('Example app listening on port 9000!');
});

