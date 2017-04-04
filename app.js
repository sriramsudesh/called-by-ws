

var express = require("express");
var bodyParser = require("body-parser");
var app = express();
 
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
 
 
var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});
