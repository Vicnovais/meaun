var bCrypt = require('bcrypt-nodejs');

var login = function (passport, User, LocalStrategy) {
    var isValidPassword = function(user, password){
        return bCrypt.compareSync(password, user.password);
    }

    passport.use('login', new LocalStrategy({
        passReqToCallback : true
      },
      function(req, username, password, done) {

        User.findOne({ 'username' :  username },
          function(err, user) {

            if (err)
              return done(err);
            
            if (!user){
              console.log('Usuário não encontrado para usuário '+username);
              return done(null, false);
            }
            
            if (!isValidPassword(user, password)){
              console.log('Senha Inválida');
              return done(null, false);
            }
            
            return done(null, user);
          }
        );
    }));
}

module.exports.login = login;