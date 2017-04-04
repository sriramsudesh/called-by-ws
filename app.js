

var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var cfenv = require('cfenv');
var appEnv = cfenv.getAppEnv();


 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
app.get("/", function(req, res) {
    res.send("Hello Unilab ! Welcome to Manila");
});

app.get("/account", function(req, res) {
   var accountMock = {
   "username": "sudesh",
   "password": "1234",
   "twitter": "ksudesh"
 	}
    if(!req.query.username) {
        return res.send({"status": "error", "message": "missing username"});
    } else if(req.query.username != accountMock.username) {
        return res.send({"status": "error", "message": "wrong username"});
    } else {
        return res.send(accountMock);
    }
});

 	app.post("/account", function(req, res) {
    	if(!req.body.username || !req.body.password || !req.body.twitter) {
        return res.send({"status": "error", "message": "missing a parameter"});
    	} else {
        return res.send(req.body);
    	}
	});

 
// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});