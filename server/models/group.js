var mongoose = require('mongoose');

var GroupSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Group', GroupSchema);