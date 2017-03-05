var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    groups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Group' }]
});

module.exports = mongoose.model('User', UserSchema);