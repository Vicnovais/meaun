var express = require('express');
var app = express();
var start = require('./settings/appStart.js');
var auth = require('./auth/main.js');
var path = require('path');

start.startServerSettings(app, express);
app.use(express.static(path.resolve('./')));

app.listen(8080);
console.log("App listening on port 8080");