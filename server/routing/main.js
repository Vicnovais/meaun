var api = require('./api.js');
var auth = require('./auth.js');

var init = function (app, passport) {
    api.createRoutes(app);
    auth.createRoutes(app, passport);
}

module.exports.init = init;