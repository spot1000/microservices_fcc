var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('type in a unix time stamp at the end of this address to output the date of that timestamp, or type in a date at the end of the address to output the unix timestamp');
})

app.get('/:ID', function (req,res) {
  var id = req.params.ID;
  var timestamp = new Date();
  timestamp.setTime(id);
  res.send('unix timestamp: ' + id + 'represented Date: ' + timestamp.getFullYear() + timestamp.getMonth());


});


app.listen(3000);
