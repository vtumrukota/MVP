var express = require('express');
var mongoose = require('mongoose');


//Get Server Running
var app = express();
var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

app.use(express.static('client'));


//Database Setup
var mongoURI = process.env.CUSTOMCONNSTR_MONGOLAB_URI || 'mongodb://localhost:270/flowlabs';

//mongoose.connect(mongoURI);

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function (callback) {
// });

//Schema + Model Creation
var contactSchema = new mongoose.Schema({
  email: {type: String, required: true}
});

module.exports = {app:app};

require('./config/middleware.js')(app, express);
// , db:db, Contact:mongoose.model('Contact', contactSchema)