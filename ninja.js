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
  // console.log(captions.constants[2]);
});

var sene, lene;
fs.readFile('sene.json', function(err, data) {
  if (err) {
    throw err;
  }
  sene = JSON.parse(data);
  lene = sene.length;
});


// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

/*
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/dreams.html');
});
*/

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/views/cake.html');
});

app.get("/co", function(request, response) {
  // console.log(request.route);
  response.send(captions);
});

app.get("/sere", function(req, res) {
  var rand = Math.floor(Math.random() * lene);
  var json = sene[rand];
  res.writeHead(200, {"Content-Type": "application/json"});
  res.end(JSON.stringify(json));
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

// begin dedicated data stores
// allocate single buffer on start
// open file descriptor for writing
// when buffer is full, flush to file
// and start new buffer, stream cycle

// test cache data per user
// each unique home page request generates a token
// stored in memory per session client side
// xhr post some data and cache on server in buffer
// test hotload retention
// save to filesystem json document