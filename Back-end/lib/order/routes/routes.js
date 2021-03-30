let Order = require('../model/db');

module.exports = function (app, module_prefix = 'order') {

    app.get('/' + module_prefix + '/', function (req, res) {
        Order.find(function (err, orders) {
            if (err) {
                console.log(err);
            } else {
                res.json(orders);
            }
        });
    });

    app.get('/' + module_prefix + '/:token', function (req, res) {
        let token = req.params.token;
        Order.findOne({ token: token }, function (err, order) {
            res.json(order);
        });
    });

    app.post('/' + module_prefix + '/add', function (req, res) {
        let order = new Order(req.body);
        order.save()
            .then(order => {
                res.status(200).json({ 'order': 'order added successfully' });
            })
            .catch(err => {
                res.status(400).send('adding new order failed');
            });
    });

}