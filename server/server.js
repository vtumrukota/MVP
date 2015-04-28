var express = require('express');
var mongoose = require('mongoose');
var fs = require('fs');

//Get Server Up
var app = express();
var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

app.use(express.static('client'));


//Database Setup
var mongoURI = process.env.CUSTOMCONNSTR_MONGOLAB_URI || 'mongodb://localhost/flowlabs';
mongoose.connect(mongoURI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
});

//Schema Creation
var contactSchema = mongoose.Schema({
  email: String
});

var Contact = mongoose.model('Contact', contactSchema);




module.exports = app;