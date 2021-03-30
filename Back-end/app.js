//Filename: app.js
//Express is required for creating Node.js based web apps
var express = require('express');

const steam = require('steam-login');

//body-parser is used to parse the Request body and populate the req.
var bodyParser = require('body-parser');

var app = express();
app.set('port', 5000);

//Configuring Express App to make use of BodyParser's JSON parser to parse
//JSON request body
app.use(bodyParser.json());

//Including the routes module
var user_routes = require("./lib/user/routes/routes");
user_routes(app, 'user', steam);

var c_edition_routes = require("./lib/collector_edition/routes/routes");
c_edition_routes(app, 'collector_edition');

var order_routes = require("./lib/order/routes/routes");
order_routes(app, 'order');

//Starting up the server on the port: 5000
app.listen(app.get('port'), function () {
    console.log('Server up: http://localhost:' + app.get('port'));
});