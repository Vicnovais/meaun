var model = require('.././models/user.js');
var base = require('./BaseController.js');

var todosController = base.buildBaseController('todos', model);

module.exports = todosController;