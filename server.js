// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path'); 
var api_Route = require('./app/routing/api-routes.js');
var html_Route = require('./app/routing/html-routes.js');
var logger = require("morgan");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'})); 
app.use(logger('dev'));


app.get('/api/friends', apiRoute);
app.get('/survey', htmlRoute);
app.use('/', htmlRoute);


app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
});