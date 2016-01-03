/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------


var express = require('express');
var cfenv = require('cfenv');
var routes = require('./routes/index');
var app = express();
var bodyParser = require('body-parser');


//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.raw({ type: 'audio/wav', limit: '50mb' }));


app.use(express.static(__dirname + '/public'));
app.use('/', routes);


var appEnv = cfenv.getAppEnv();


app.listen(appEnv.port, '0.0.0.0', function() {
  console.log("server starting on " + appEnv.url);
});
