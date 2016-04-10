
var express = require('express');
var app = express();

//Import routes
var route_index = require('./routes/index')
var route_api_cabs = require('./routes/cabs');

app.use('/', route_index);
app.use('/api/v1/cabs', route_api_cabs)

//Error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});

app.listen(9000, function () {
  console.log('Example app listening on port 9000!');
});
