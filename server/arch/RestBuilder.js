var util = require(".././util/util.js");

var getAll = function (modelName, res) {
    modelName.find(function (err, ret) {
        if (err)
            res.send(err);
        else
            res.json(ret);
    });
};

var post = function (modelName, res, req) {
    modelName.create(util.buildObjectFromModel(modelName, req.body),
        function (err, ret) {
            if (err)
                res.send(err);

            getAll(modelName, res);
        }
    );
};

var filter = function (modelName, res, req) {
    modelName.find(req.params.cfg, function (err, ret) {
        if (err)
            res.send(err);
        else
            res.json(ret);
    });
};

var deleteAll = function (modelName, res) {
    modelName.remove().exec();
    getAll(modelName, res);
};

var deleteById = function (modelName, res, req) {
    modelName.remove({
            _id: req.params.id
        },
        function (err, ret) {
            if (err)
                res.send(err);

            getAll(modelName, res);
        }
    );
};

var getById = function (modelName, res, req) {
    modelName.findOne({
            _id: req.params.id
        },
        function (err, ret) {
            if (err)
                res.send(err);
            else
                res.json(ret);
        });
}

module.exports.getAll = getAll;
module.exports.post = post;
module.exports.deleteAll = deleteAll;
module.exports.deleteById = deleteById;
module.exports.getById = getById;
module.exports.filter = filter;