var path = require('path');
var auth = require('.././auth/main.js')

var createRoutes = function (app, passport) {
    app.get('/', function (req, res) {
        if (req.isAuthenticated()) res.sendFile(path.resolve('index.html'));
        else res.sendFile(path.resolve('login.html'));
    });

    app.post('/login', function (req, res, next) {
        passport.authenticate('login', function (err, user, info) {
            if (err) { return next(err); }
            if (!user) { return res.redirect('/login'); }
            req.logIn(user, function (err) {
                if (err) { return next(err); }
                return res.redirect('/');
            });
        })(req, res, next);
    });

    app.get('/signup', function (req, res) {
        res.sendFile(path.resolve('register.html'));
    });

    app.get('/signout', function (req, res) {
        req.logout();
        res.redirect('/');
    });
    
    app.post('/signup', passport.authenticate('signup', {
        successRedirect: '/'
        , failureRedirect: '/signup'
        , failureFlash: true
    }));
}

module.exports.createRoutes = createRoutes;