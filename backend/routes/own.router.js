const express = require('express');
const cors = require('./cors');
const models = require('../models/models');
const { dbConnect } = require('../connectDB');
const authenticate = require('../authenticate');

const ownRouter = express.Router();

ownRouter.use(express.json());


ownRouter.route('/')
    .get(authenticate.verifyOwner, (req, res, next) => {
        const own_id = authenticate.getAccountId(req);
        dbConnect.query("SELECT park_id, location FROM park WHERE own_id = " + own_id +";", {
            type: dbConnect.QueryTypes.SELECT
        })  .then((result) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(result);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post(authenticate.verifyOwner, (req, res, next) => {
        let parkJson = req.body;
        parkJson["own_id"] = authenticate.getAccountId(req);
        models.Park.create(req.body)
            .then((park) => {
                console.log('Park created ', park);
                res.statusCode = 201;
                res.setHeader('Content-Type', 'application/json');
                res.json(park);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

ownRouter.route('/:parkId')
    .get(authenticate.verifyOwner, (req, res, next) => {
        dbConnect.query("SELECT total_space, active_time, location, price, hasCamera, hasRoof, allowOvernight, allowBooking, description, image_url "
                        + "FROM park WHERE park_id= " + req.params.parkId + ";", {type: dbConnect.QueryTypes.SELECT})
            .then((result) => {
                console.log(result);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(result);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post(authenticate.verifyOwner, (req, res, next) => {
        models.Park.update(req.body, {
            where: {
                park_id: req.params.parkId
            }
        })  .then((result) => {
                res.statusCode = 200;
            }, (err) => next(err))
            .catch((err) => next(err)); 
    });

module.exports = ownRouter;