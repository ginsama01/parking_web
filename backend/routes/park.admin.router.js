const express = require('express');
const models = require('../models/models');
const { dbConnect } = require('../connectDB');
const authenticate = require('../authenticate');

const parkRouter = express.Router();

parkRouter.use(express.json());

parkRouter.route('/')
    .get(authenticate.verifyAdmin, (req, res, next) => {
        dbConnect.query("SELECT p.park_id AS id, p.name, p.location, p.price, p.hasRoof, p.hasCamera, p.allowOvernight, p.allowBooking, p.description, "
        + "p.isActivated, p.own_id AS owner_id, (SELECT CONCAT(firstname, ' ', lastname) FROM account WHERE id = p.own_id) AS owner FROM park p;", {
            type: dbConnect.QueryTypes.SELECT
        }).then(result => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        }, (err) => next(err))
        .catch(err => next(err))
    });

module.exports = parkRouter;