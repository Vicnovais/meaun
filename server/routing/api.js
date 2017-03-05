var requireDir = require('require-dir');
var controllersDir = requireDir('../controllers');
var auth = require('.././auth/main.js');

var createRoutes = function (app) {
    var controllers = controllersDir;
    
    for (var name in controllers) {
        if (name != 'BaseController') {
            var controller = controllers[name];
            build(app, controller);    
        }
    }
}

var build = function (app, controller) {
    app.get(controller.apiUrl, auth.isAuthenticated, controller.getAllCallback);
    app.get(controller.apiUrl + '/:id', auth.isAuthenticated, controller.getByIdCallback);
    app.post(controller.apiUrl, auth.isAuthenticated, controller.postCallback);
    app.delete(controller.apiUrl, auth.isAuthenticated, controller.deleteAllCallback);
    app.delete(controller.apiUrl + '/:id', auth.isAuthenticated, controller.deleteByIdCallback);
}

module.exports.createRoutes = createRoutes;