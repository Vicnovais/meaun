var model = require('.././models/user.js');
var base = require('./BaseController.js');

var userController = base.buildBaseController('user', model);

module.exports = userController;