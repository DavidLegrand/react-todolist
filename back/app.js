var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var routesApi = require('./api/routes/index');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', routesApi);
app.listen(8080)
module.exports = app;