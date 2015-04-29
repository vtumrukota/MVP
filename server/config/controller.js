var mongoose = require('mongoose');
var app = require('../server.js');


module.exports = {
  send: function(){ 
    app.post('/contacts', function(req, res){
      console.log('HIT SERVER POST');
      // var newEmail = new Contact ({
      //   email: req.body.text
      // });

      // newEmail.save(function(err, newEntry) {
      //   if (err) throw err;
      //   else {
      //     res.send(200, newEmail);
      //   }
      // });
    })
  }
};
