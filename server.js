// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// setup Express app
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("app"));

require('./app/routing/html-routes.js')(app);
require('./app/routing/api-routes.js')(app);

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// starts the server to begin listening
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})
