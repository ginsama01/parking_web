var express = require('express');
var router = express.Router();
var cors = require('./cors');
var models = require('../models/models');
var authenticate = require('../authenticate');
var passport = require('passport');
var cors = require('./cors');

const { dbConnect } = require('../connectDB');

const accountRouter = express.Router();

accountRouter.use(express.json());

accountRouter.route('/signup')
    .post((req, res, next) => {
        console.log(req.body);
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
                                    res.json({success: true, status: 'Đăng ký thành công!'});
                                }, (err) => next(err));
                        } else {
                            models.Owner.create({"own_id": result.dataValues.id, "isactivated": false})
                                .then(() => {
                                    console.log('Owner created ');
                                    res.json({success: true, status: 'Đăng ký thành công!'});
                                }, (err) => next(err));
                        }
                    }, (err) => next(err))
            }
        }, (err) => next(err))
        .catch(err => next(err));
    })

accountRouter.route('/login')
    .post((req, res, next) => {
        let username = req.body.username;
        let password = req.body.password;
        
            if (!username) {
                var err = new Error('You are not authenticated!');
                err.status = 401;
                return next(err);
            }
            dbConnect.query("SELECT * FROM account WHERE username = '" + req.body.username +"';", {
                type: dbConnect.QueryTypes.SELECT
            }) .then((result) => {
                
                if (result.length == 0) {
                    var err = new Error('User ' + username + ' does not exist!');
                    err.status = 403;
                    return next(err);
                } 
                else if (result[0].password !== password) {
                    // var err = new Error('Your password is incorrect!');
                    // err.status = 403;
                    // return next(err);
                    res.statusCode = 403;
                    res.json({message: "Your password is incorrect!"});
                }
                else if (result[0].username === username && result[0].password === password) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    var token = authenticate.getToken({id: result[0].id});
                    res.cookie('token', token, {signed: true});
                    dbConnect.query("SELECT * FROM user WHERE user_id = " + result[0].id + ";", {
                        type: dbConnect.QueryTypes.SELECT
                    }).then(result1 => {
                        if (result1.length != 0) {
                            res.json({login: true, username: username, role: 'user'});
                        } else {
                            dbConnect.query("SELECT * FROM owner WHERE own_id = " + result[0].id + ";", {
                                type: dbConnect.QueryTypes.SELECT
                            }).then(resu => {
                                if (resu.length != 0) {
                                    res.json({login: true, username: username, role: 'owner'});
                                } else {
                                    res.json({login: true, username: username, role: 'admin'});
                                }
                            }, err => next(err))
                        }
                    }, err => next(err))
                }
            }, (err) => next(err)) 
            .catch((err) => next(err));
    })

accountRouter.route('/logout')
    .get((req, res, next) => {
        if (req.signedCookies.token) {
            res.clearCookie("token");
            res.json({success: true, status: 'You are successfully logged out!'});
        } else {
            var err = new Error('You are not logged in!');
            err.status = 403;
            next(err);
        }
    });

accountRouter.route('/verify')
    .get((req, res, next) => {
        var code = req.query.code;
        var decodeId = authenticate.getIdCode(code);
        if (decodeId == 'Wrong') {
            var err = new Error('Can not verify. Maybe code is invalid or time out');
            err.status = 403;
            return next(err);
        }
        dbConnect.query("SELECT id FROM account WHERE id = " + decodeId + ";", {
            type: dbConnect.QueryTypes.SELECT
        }).then(result => {
            if (result.length == 0) {
                var err = new Error('Can not verify. Maybe code is invalid or time out');
                err.status = 403;
                return next(err);
            }
        }, (err) => next(err))
        .catch(err => next(err));
    })
    .post((req, res, next) => {
        var id = authenticate.getAccountId(req)
        authenticate.sendEmail(req.hostname, req.body.email, authenticate.getCodeVerify(id));
        res.statusCode = 201;
        res.json({success: true, status: 'Please check your email to verify account'});
    })
    
module.exports = accountRouter;