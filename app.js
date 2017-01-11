var express = require('express');
var app = express();
var bodyparser = require('body-parser');

app.get('/', function (req, res) {
  res.send('type in a unix time stamp at the end of this address to output the date of that timestamp, or type in a date at the end of the address to output the unix timestamp');
})

app.get('/:ID', function (req,res) {
  var id = req.params.ID;
  if (id == parseInt(id)) {
    console.log('this is a number');
  } else {
    console.log('this is not a number')
  }
  var timestamp = new Date();

});


app.listen(3000);
