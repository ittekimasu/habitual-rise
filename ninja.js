// ninja.js
// this is the one

// init project
var express = require('express');
var app = express();

// filesystem
var fs = require('fs');
// console.log(fs);
var captions;
fs.readFile('captions.json', function(err, data) {
  if (err) {
    throw err;
  }
  captions = JSON.parse(data);
  console.log(captions.constants[2]);
});


// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/dreams.html');
});

app.get("/co", function(request, response) {
  console.log(request);
  response.send(captions);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

