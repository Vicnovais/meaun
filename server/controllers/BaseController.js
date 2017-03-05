var rest = require('.././arch/RestBuilder.js');

var buildBaseController = function (endPoint, model) {
    return {
        apiUrl: '/api/' + endPoint,
        getAllCallback: function (req, res) {
            rest.getAll(model, res);
        },
        postCallback: function (req, res) {
            rest.post(model, res, req);
        },
        deleteAllCallback: function (req, res) {
            rest.deleteAll(model, res);
        },
        deleteByIdCallback: function (req, res) {
            rest.deleteById(model, res, req);
        },
        getByIdCallback: function (req, res) {
            rest.getById(model, res, req);
        },
        filterCallback: function (req, res) {
            rest.filter(model, res, req);
        }
    }
}

module.exports.buildBaseController = buildBaseController;