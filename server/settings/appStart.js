var database = require('./database.js');
var appSettings = require('./app.js');

var init = function (app, express) {
    database.init();
    appSettings.init(app, express);
}

module.exports.startServerSettings = init;