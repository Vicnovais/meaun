var bCrypt = require('bcrypt-nodejs');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user.js');
var Group = require('../models/group.js');
var Login = require('./login.js');
var SignUp = require('./signup.js');
var Routes = require('../routing/auth.js');
var flash = require('connect-flash');

var init = function (app, expressSession, passport) {
    configurePassport(app, expressSession, passport, 'secretKey');
    Login.login(passport, User, LocalStrategy);
    SignUp.signup(passport, User, Group, LocalStrategy);
}

var configurePassport = function (app, expressSession, passport, secretKey) {
    app.use(expressSession({secret: secretKey}));
    app.use(passport.initialize());
    app.use(passport.session());
    
    passport.serializeUser(function(user, done) {
        done(null, user._id);
    });
 
    passport.deserializeUser(function(id, done) {
      User.findById(id, function(err, user) {
        done(err, user);
      });
    });
}

var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}

module.exports.init = init;
module.exports.login = Login;
module.exports.signup = SignUp;
module.exports.authRoutes = Routes;
module.exports.isAuthenticated = isAuthenticated;