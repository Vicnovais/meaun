var bCrypt = require('bcrypt-nodejs');

var createHash = function (password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
}

module.exports.createHash = createHash;