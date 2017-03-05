var buildObjectFromModel = function (model, values) {
    var properties = Object.keys(model.schema.paths);
    var obj = new Object();

    properties.forEach(function (prop, i) {
        if (values[prop]) {
            obj[prop] = values[prop];
        }
    });

    return obj;
};

module.exports.buildObjectFromModel = buildObjectFromModel;