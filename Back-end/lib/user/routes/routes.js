var cont = require("../control/controller");

module.exports = function (app, module_prefix = 'user', steam) {

    app.use(require('express-session')({ resave: false, saveUninitialized: false, secret: 'a secret' }));
    app.use(steam.middleware({
        realm: 'http://localhost:5000/' + module_prefix,
        verify: 'http://localhost:5000/' + module_prefix + '/verify',
        apiKey: "EE90EE519206CFE81F988AE870D3DE43"
    }
    ));

    app.get('/' + module_prefix + '/', function (req, res) {
        res.send(req.user == null ? 'not logged in' : 'hello ' + req.user.username).end();
    });

    app.get('/' + module_prefix + '/authenticate', steam.authenticate(), function (req, res) {
        res.redirect('/');
    });

    app.get('/' + module_prefix + '/verify', steam.verify(), async function (req, res) {
        //console.log(req.user["username"]);
        if (await cont.getDetails(req.user["username"]) == null) {
            try {
                cont.addUser(req.user);
                console.log("New user");
            }
            catch {
                res.send("Error Occured");
            }
        }
        else {
            console.log("Already registered");
        }
        res.redirect('/' + module_prefix + '/');
    });

    app.get('/' + module_prefix + '/logout', steam.enforceLogin('/'), function (req, res) {
        req.logout();
        res.redirect('/');
    });

    app.get('/' + module_prefix + '/:userName/', async function (req, res) {
        try {
            let userInfo = await cont.getDetails(req.params.userName);
            console.log(userInfo);
            res.json(userInfo);
        }
        catch
        {
            res.json({ "message": "Problems occured" });
        }
    })

}