var express = require('express');
var mongoose = require('mongoose');
var fs = require('fs');

var app = express();

var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

app.get('/bottle', function(req, res){
  res.send('Clicked Bottle Link!');
});


app.use(express.static('client'));

//mongoose.connect('mongodb://localhost/flowlabs');




module.exports = app;