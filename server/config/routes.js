var controller = require('./controller.js');

module.exports = function(app) {
 app.post('/home', controller.send);
};