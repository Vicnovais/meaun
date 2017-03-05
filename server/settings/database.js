var mongoose = require('mongoose');

var init = function () {
    mongoose.connect('<connectionString>');
}

module.exports.init = init;