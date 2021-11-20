var express = require('express');
var router = express.Router();
var models = require('../models/models');
const { dbConnect } = require('../connectDB');

const accountRouter = express.Router();

accountRouter.use(express.json());

accountRouter.route('/signup')
    .post((req, res, next) => {
        dbConnect.query("SELECT * FROM account WHERE username = '" + req.body.username +"';", {
            type: dbConnect.QueryTypes.SELECT
        }) .then((result) => {
            if (result.length != 0) {
                var err = new Error('User ' + req.body.username + ' already exists!');
                err.status = 403;
                next(err);
            } else {
                models.Account.create(req.body) 
                    .then((result) => {
                        console.log('Park created ');
                        if (req.body.type == "user") {
                            models.User.create({"user_id": result.dataValues.id, "isactivated": false})
                                .then(() => {
                                    console.log('User created ');
                                    res.json();
                                }, (err) => next(err));
                        } else {
                            models.Owner.create({"own_id": result.dataValues.id, "isactivated": false})
                                .then(() => {
                                    console.log('Owner created ');
                                    res.json();
                                }, (err) => next(err));
                        }
                    }, (err) => next(err))
                    .catch((err) => next(err));
            }
        })

    })


module.exports = accountRouter;