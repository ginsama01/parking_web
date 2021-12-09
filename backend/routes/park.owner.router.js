const express = require('express');
const models = require('../models/models');
const { dbConnect } = require('../connectDB');
const authenticate = require('../authenticate');

const ownRouter = express.Router();

ownRouter.use(express.json());

ownRouter.route('/parks')
    .get((req, res, next) => {
        //const own_id = authenticate.getAccountId(req);
        const own_id = 3;
        dbConnect.query("SELECT park_id AS id, name, location, total_space, price, hasCamera, hasRoof, allowOvernight, allowBooking, description, open_time " 
        + "FROM park WHERE own_id = " + own_id +";", {
            type: dbConnect.QueryTypes.SELECT
        })  .then((result) => {
                
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(result);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        let parkJson = req.body;
        //parkJson["own_id"] = authenticate.getAccountId(req);
        parkJson["own_id"] = 3;
        parkJson['open_time'] = parkJson['allow24h'] == true ? 'Cả ngảy' : parkJson['open_time'] + ' - ' + parkJson['close_time'];
        console.log(parkJson);
        models.Park.create(req.body)
            .then((park) => {
                console.log('Park created ', park);
                res.statusCode = 201;
                res.setHeader('Content-Type', 'application/json');
                res.json(park);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

ownRouter.route('/parks/:id')
    .get((req, res, next) => {
        dbConnect.query("SELECT park_id AS id, name, location, total_space, price, hasCamera, hasRoof, allowOvernight, allowBooking, description, open_time " 
        + "FROM park WHERE park_id = " + req.params.id +";", {
            type: dbConnect.QueryTypes.SELECT
        })  .then((result) => {
        
                    if (result[0]['open_time'] == 'Cả ngày') {
                        result[0]['open_time'] = '';
                        result[0]['close_time'] = '';
                        result[0]['allow24h'] = true;
                    } else {
                        result[0]['close_time'] = result[0]['open_time'].split(' - ')[1];
                        result[0]['open_time'] = result[0]['open_time'].split(' - ')[0];
                        result[0]['allow24h'] = false;
                    }
                
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(result[0]);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        let parkJson = req.body;
        //parkJson["own_id"] = authenticate.getAccountId(req);
        parkJson["own_id"] = 3;
        parkJson['open_time'] = parkJson['allow24h'] == true ? 'Cả ngảy' : parkJson['open_time'] + ' - ' + parkJson['close_time'];
        console.log(parkJson);
        models.Park.create(req.body)
            .then((park) => {
                console.log('Park created ', park);
                res.statusCode = 201;
                res.setHeader('Content-Type', 'application/json');
                res.json(park);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

module.exports = ownRouter;