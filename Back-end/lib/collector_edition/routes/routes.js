const CEdition = require('../model/db.js');

module.exports = function (app, module_prefix = 'collector_edition') {

    app.get('/' + module_prefix + '/', (req, res) => {
        CEdition.find({}, (err, ceditions) => {
            res.json({ ceditions });
        })
    });

    app.get('/' + module_prefix + '/name', (req, res) => {

        if (!req.query.collector_edition_name)
            res.status(400).json({ "message": "bad input parameter" });

        CEdition.findByCName(req.query.collector_edition_name, (err, cedition) => {
            if (err || cedition.length == 0)
                res.status(404).json({ "message": "collector edition does not exist" });
            else
                res.status(200).json({ cedition });
        })
    });

    app.get('/' + module_prefix + '/author', (req, res) => {

        if (!req.query.username)
            res.status(400).json({ "message": "bad input parameter" });


        CEdition.findByAuthorName(req.query.username, (err, cedition) => {
            if (err || cedition.length == 0)
                res.status(404).json({ "message": "user does not exist" });
            else
                res.status(200).json({ cedition });
        })
    });

    app.get('/' + module_prefix + '/game', (req, res) => {

        if (!req.query.game_name)
            res.status(400).json({ "message": "bad input parameter" });


        CEdition.findByGame(req.query.game_name, (err, cedition) => {
            if (err || cedition.length == 0)
                res.status(404).json({ "message": "game does not exist" });
            else
                res.status(200).json({ cedition });
        })
    });

    app.get('/' + module_prefix + '/random', (req, res) => {

        if (!req.query.n)
            res.status(400).json({ "message": "bad input parameter" });

        CEdition.aggregate([{ $sample: { size: parseInt(req.query.n) } }]).exec(function (err, ceditions) {
            // console.log(ceditions);
            res.status(200).json({ ceditions });
        });
    });

    app.get('/' + module_prefix + '/price', (req, res) => {

        if (!req.query.min_price || !req.query.max_price)
            res.status(400).json({ "message": "bad input parameter" });

        CEdition.findByPrice(req.query.min_price, req.query.max_price, (err, cedition) => {
            res.status(200).json({ cedition });
        })
    });

    app.get('/' + module_prefix + '/:id', (req, res) => {
        CEdition.findById(req.params.id, (err, cedition) => {
            res.send({ cedition });
        })
    });

    app.post('/' + module_prefix + '/', (req, res) => {

        if (!req.body.username || !req.body.collector_edition_name || !req.body.uid || !req.body.price || !req.body.game_name || !req.body.genre || !req.body.image_url)
            res.status(400).json({ "message": "bad input parameter" });

        CEdition.find({ name: req.body.username }, function (err, cediton) {
            if (cediton.length != 0)
                res.status(409).json({ "message": "collector edition already exists" });
            else {
                const cedition = new CEdition(
                    {
                        name: req.body.collector_edition_name,
                        created_by: req.body.username,
                        price: req.body.price,
                        no_of_content: req.body.image_url.length,
                        thumbnail: req.body.image_url[0],
                        uid: req.body.uid,
                        game_name: req.body.game_name,
                        genre: req.body.genre,
                        images: req.body.image_url
                    }
                );
                cedition.save(function (err) {
                    if (err)
                        console.log('Error ', err);
                    else {

                        // console.log('Created Successful!!!');
                        res.status(200).json({ "message": "Collector edition created successfully" });
                    }
                }
                );
            }

        });
    })

    app.put('/' + module_prefix + '/edit', (req, res) => {

        const c_name = req.body.collector_edition_name;
        if (!c_name)
            res.status(400).json({ "message": "bad input parameter" });
        else {
            CEdition.findOne({ name: req.body.collector_edition_name }, function (err, cedition) {
                console.log(cedition['name']);
                let contents = 0;
                for (const [key, val] of Object.entries(req.body.edit_data)) {
                    console.log(key);
                    if (key == 'rem_genre') {
                        for (const g_name of val) {
                            const idx = cedition['genre'].indexOf(g_name);
                            console.log(idx, g_name)
                            if (idx != -1) {
                                cedition['genre'].splice(idx, 1);
                            }

                        }
                    }
                    else if (key == 'add_genre') {
                        for (const g_name of val) {
                            console.log(g_name);
                            if (!cedition['genre'].includes(g_name))
                                cedition['genre'].push(g_name);
                        }
                    }
                    else if (key == 'add_image_url') {
                        for (const g_name of val) {
                            console.log(g_name);
                            if (!cedition['images'].includes(g_name)) {
                                cedition['images'].push(g_name);
                                // cedition['no_of_content'] = cedition['no_of_content']+1;
                                contents = contents + 1;
                            }
                        }
                    }
                    else if (key == 'rem_image_url') {
                        for (const g_name of val) {
                            const idx = cedition['images'].indexOf(g_name);
                            console.log(idx, g_name)
                            if (idx != -1) {
                                cedition['images'].splice(idx, 1);
                                // cedition['no_of_content'] = cedition['no_of_content']-1;
                                contents = contents - 1;
                            }
                        }
                    }
                    else {
                        cedition[key] = val;
                    }
                }
                // console.log('Content ',contents);
                cedition['no_of_content'] += contents;
                cedition.save(function (err) {
                    if (!err)
                        res.status(200).json({ "message": "edit successful" });
                });

            }
            );
        }

    });
}