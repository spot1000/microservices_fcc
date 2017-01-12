var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var months = ['january', 'febuary', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
  res.send('type in a unix time stamp at the end of this address to output the date of that timestamp, or type in a date at the end of the address to output the unix timestamp');
})

app.get('/:ID', function (req,res) {
  function dateMaker(dateCheck) {
    var time = {'unix':'',
                'month': '',
                'day':'',
                "year": ''
                }
    if (dateCheck == parseInt(dateCheck)) {
      var timestamp = new Date();
      timestamp.setTime(dateCheck);
      time.unix = dateCheck;
      time.month = months[timestamp.getMonth()];
      time.day = timestamp.getDate();
      time.year = timestamp.getFullYear();
      return 'Unix time: ' + time.unix + " Natural time: " + time.month + ' ' + time.day +', ' + time.year;
    } else {
      var dateArr = dateCheck.replace(/([,])/g, '').split(' ');
      console.log(dateArr);
      console.log(months.indexOf(dateArr[0]));
      if (months.indexOf(dateArr[0].toLowerCase()) >= 0 && dateArr[1] <= 31 && dateArr[2] >= 1970){
        var timestamp = new Date(dateArr[2], months.indexOf(dateArr[0]), dateArr[1]);
        time.month = dateArr[0].toLowerCase().replace(/(\b\w)/g, function(l) {return l.toUpperCase();} );
        time.day = dateArr[1];
        time.year = dateArr[2];
        time.unix = timestamp.getTime();
        return 'Unix time: ' + time.unix + " Natural time: " + time.month + ' ' + time.day +', ' + time.year;
      }
      return "unknown Date";
    }
  }

  res.send(dateMaker(req.params.ID))

});


app.listen(port);
