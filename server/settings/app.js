var expressSession = require('express-session');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var auth = require('.././auth/main.js');
var passport = require('passport');
var routing = require('../routing/main.js');
var flash = require('connect-flash');

var init = function (app, express) {
    app.use(flash());
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({
        'extended': 'true'
    }));
    app.use(bodyParser.json());
    app.use(bodyParser.json({
        type: 'application/vnd.api+json'
    }));
    app.use(methodOverride());
    
    auth.init(app, expressSession, passport);
    
    routing.init(app, passport);
}

module.exports.init = init;