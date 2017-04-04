
var appRouter = function(app) {

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
}
 
module.exports = appRouter;
