var util = require('./util.js');

var signup = function (passport, User, Group, LocalStrategy) {
    passport.use('signup', new LocalStrategy({
            passReqToCallback : true
        },
        function(req, username, password, done) {
            findOrCreateUser = function(){

                User.findOne({ 'username' :  username }, function(err, user) {

                    if (err){
                        console.log('Error in SignUp: '+err);
                        return done(err);
                    }

                    if (user) {
                        console.log('User already exists with username: '+username);
                        return done(null, false);
                    } else {
                        var newUser = new User();

                        newUser.username = username;
                        newUser.password = util.createHash(password);

                        newUser.save(function(err) {
                            if (err){
                                console.log('Error in Saving user: '+err);  
                                throw err;  
                            }
                            
                            var newGroup = new Group({
                                name: req.param('group')
                            });

                            newGroup.save(function (err) {
                                if (err) throw err;
                                console.log('User Registration succesful');    
                                return done(null, newUser);
                            });
                        });
                    }
                });
            };

            process.nextTick(findOrCreateUser);
        })
    ); 
}

module.exports.signup = signup;