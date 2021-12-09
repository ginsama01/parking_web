const express = require('express');
const models = require('../models/models');
const { dbConnect } = require('../connectDB');
const authenticate = require('../authenticate');

const accountRouter = express.Router();

accountRouter.use(express.json());

//Fetch user list for admin to show
accountRouter.route('/userinfo')
    .get(authenticate.verifyAdmin, (req, res, next) => {
        dbConnect.query("SELECT a.id, a.username, CONCAT(a.firstname, ' ', a.lastname) AS name, a.address, a.phone, a.email, u.isActivated, u.penalty"
            + " FROM account a JOIN user u ON a.id = u.user_id;", {
            type: dbConnect.QueryTypes.SELECT
        }).then(result => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        }, (err) => next(err))
        .catch(err => next(err))
    })

accountRouter.route('/ownerinfo')
    .get(authenticate.verifyAdmin, (req, res, next) => {
        dbConnect.query("SELECT a.id, a.username, CONCAT(a.firstname, ' ', a.lastname) AS name, a.address, a.phone, a.email, o.isActivated"
            + " FROM account a JOIN owner o ON a.id = o.own_id;", {
            type: dbConnect.QueryTypes.SELECT
        }).then(result => {
            const promises = [];
            var resObj = result;
            console.log(resObj[0]);
            for (let i = 0; i < resObj.length; ++i) {
                promises.push(
                    dbConnect.query("SELECT park_id AS id, name, location FROM park WHERE own_id = " + resObj[i]['id'] + ";", {
                        type: dbConnect.QueryTypes.SELECT
                    }).then(parks => {
                        resObj[i]['parks'] = parks;
                    }, (err) => next(err))
                    .catch(err => next(err))
                );
            }
            Promise.all(promises)
            .then(() => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resObj);
            }, (err) => next(err))
            .catch(err => next(err));
        }, (err) => next(err))
        .catch(err => next(err))
    })
    
module.exports = accountRouter;