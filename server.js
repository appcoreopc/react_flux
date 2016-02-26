"use strict";

var mongoclient = require("mongodb");

var _express = require("express");
var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

//app.get('/', (req, res) => res.send("hello"));

app.use(_express2.default.static("public"));

app.listen(3000);

var db; 

mongoclient.connect("mongodb://hbjerwo:Lif#1234@ds017248.mlab.com:17248/fluxtest", function(err, database)  {

	if (err) throw err; 

	db = database; 
	
});

console.log('connected on port 3000. done!');

app.get("/data/links", function(req, res) { 

	db.collection("links").find({}).toArray(function(err, links) { 
		// console.log(links);
		res.json(links);
	});

});
