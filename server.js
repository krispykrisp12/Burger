// ===========================================
//  The require section
var express = require("express");
var bodyParser = require("body-parser");


var exphbs = require("express-handlebars");
var mysql = require("mysql");

// var path = require("path");
// Defining the port for heroku  and localhost
var PORT = process.env.PORT || 3000;
// Defining express
var app = express();
// ============================================
// parse application/x-www-form-urlencoded
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
// parse appliction/json
app.use(bodyParser.json());
// ============================================
var exphbs = require("express-handlebars");
// ============================================
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");
app.use(routes);
// ============================================
app.listen(PORT, function () {
  console.log("Server is running on " + PORT + " port");
});
