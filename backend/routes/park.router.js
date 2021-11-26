const express = require('express');
const cors = require('./cors');
const models = require('../models/models');
const { dbConnect } = require('../connectDB');
const authenticate = require('../authenticate');
const { calDistance } = require('../distance');
const { sortByRate, sortByPrice, sortByDistance } = require('../sort');
const parkRouter = express.Router();

var address = '';
var parkObj = [];

parkRouter.use(cors.cors);
parkRouter.use(express.json());

parkRouter.route('/')
    .get((req, res, next) => {
        dbConnect.query("SELECT park_id, location FROM park", {
            type: dbConnect.QueryTypes.SELECT
        }).then((result) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        }, (err) => next(err))
        .catch(err => next(err))
    })
    .post((req, res, next) => {
        address = req.body.address;
        dbConnect.query("SELECT park_id, name, image_url AS image, price, location, (SELECT AVG(rating) FROM comment WHERE rela_id IN " +
            "(SELECT rela_id FROM park_user WHERE park_id = park.park_id)) AS rate, (SELECT COUNT(rating) FROM comment WHERE" +
            " rela_id IN (SELECT rela_id FROM park_user WHERE park_id = park.park_id)) AS numOfRate FROM park", {
            type: dbConnect.QueryTypes.SELECT
        }).then((parks) => {
            parkObj = parks;
            const promises = [];
            for (let i = 0; i < parkObj.length; ++i) {
                promises.push(
                    calDistance(address, parkObj[i]['location'])
                        .then((distance) => {
                            parkObj[i]['distance'] = distance;
                        }, (err) => next(err))
                        .catch((err => next(err)))
                );
            }
            Promise.all(promises)
                .then(() => {
                    console.log(parkObj);
                    for (let i = parkObj.length - 1; i >= 0; --i){
                        parkObj[i]['rate'] = parkObj[i]['rate'] === null ? 0 : parkObj[i]['rate'];
                        parkObj[i]['image'] = parkObj[i]['image'].split(',')[0];
                        if (Number(parkObj[i]['distance'].slice(0, -3)) > 10)
                            parkObj.splice(i, 1);
                    } 
                    
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(parkObj);
                }, (err) => next(err))
                .catch(err => next(err));
        }, (err) => next(err))
            .catch(err => next(err))
    });


parkRouter.route('/best')
    .get((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(parkObj.sort(sortByRate));
    });


parkRouter.route('/cheap')
    .get((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(parkObj.sort(sortByPrice));
    });


parkRouter.route('/near')
    .get((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(parkObj.sort(sortByDistance));
    });


parkRouter.route('/status/:parkId')
    .get((req, res, next) => {
        dbConnect.query("SELECT park_id, name, price, location, total_space AS totalSpace, total_space - total_in"
            + " AS totalFreeSpace, active_time AS OpenTime FROM park WHERE park_id = " + req.params.parkId + ";", {
            type: dbConnect.QueryTypes.SELECT
        }).then(async result => {
            let park = result[0];
            let currentHours = new Date().getHours();
            let [start, end] = park['OpenTime'].split(" - ");
            start = start.substr(-2, 2) == 'AM' ? Number(start.slice(0, -2)) : Number(start.slice(0, -2)) + 12;
            end = end.substr(-2, 2) == 'AM' ? Number(end.slice(0, -2)) : Number(end.slice(0, -2)) + 12;
            park['isOpen'] = (start <= currentHours && currentHours <= end) ? true : false;
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(park);
        }, (err) => next(err))
            .catch((err) => next(err));
    });

parkRouter.route('/info/:parkId')
    .get((req, res, next) => {
        dbConnect.query("SELECT park_id, hasCamera, hasRoof, allowBooking, allowOvernight, description, image_url FROM park " +
            " WHERE park_id = " + req.params.parkId + ";", {
            type: dbConnect.QueryTypes.SELECT
        }).then(result => {
            let park = result[0];
            let images = park['image_url'].split(',');
            park['image'] = [];
            images.forEach((item) => park['image'].push({ "img": item }));
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(park);
        }, (err) => next(err))
            .catch((err) => next(err));
    });

parkRouter.route('/comment/:parkId')
    .get((req, res, next) => {
        dbConnect.query("SELECT c.cmt_id, pu.park_id, c.rating, c.content, c.createdAt AS createTime, "
            + "(SELECT CONCAT(firstname, ' ', lastname) FROM account WHERE id = pu.user_id) AS author "
            + "FROM comment c JOIN park_user pu ON c.rela_id = pu.rela_id", {
            type: dbConnect.QueryTypes.SELECT
        }).then(result => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post(authenticate.verifyUser, (req, res, next) => {
        let comment = req.body;
        let user_id = authenticate.getAccountId(req);
        dbConnect.query("SELECT * FROM park_user WHERE park_id = " + comment['park_id'] + " AND user_id = " + user_id + ";", {
            type: dbConnect.QueryTypes.SELECT
        }).then(result => {
            if (result.length == 0) {
                models.Park_User.create({ "park_id": comment['park_id'], "user_id": user_id })
                    .then(rela => {
                        comment['rela_id'] = rela.dataValues.rela_id;
                        models.Comment.create(comment)
                            .then(comment => {
                                res.statusCode = 200;
                                res.setHeader('Content-Type', 'application/json');
                                res.json({ success: true, status: 'Post comment succesfully!' });
                            }, (err) => next(err))
                    }, (err) => next(err))
            } else {
                comment['rela_id'] = result[0].rela_id;
                models.Comment.create(comment)
                    .then(comment => {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json({ success: true, status: 'Post comment succesfully!' });
                    }, (err) => next(err))
            }
        }, (err) => next(err))
            .catch(err => next(err))
    });

parkRouter.route('/report/:parkId')
    .post(authenticate.verifyUser, (req, res, next) => {
        let report = req.body;
        let user_id = authenticate.getAccountId(req);
        dbConnect.query("SELECT * FROM park_user WHERE park_id = " + report['park_id'] + " AND user_id = " + user_id + ";", {
            type: dbConnect.QueryTypes.SELECT
        }).then(result => {
            if (result.length == 0) {
                models.Park_User.create({ "park_id": report['park_id'], "user_id": user_id })
                    .then(rela => {
                        comment['rela_id'] = rela.dataValues.rela_id;
                        models.Report.create(report)
                            .then(report => {
                                res.statusCode = 200;
                                res.setHeader('Content-Type', 'application/json');
                                res.json({ success: true, status: 'Post comment succesfully!' });
                            }, (err) => next(err))
                    }, (err) => next(err))
            } else {
                report['rela_id'] = result[0].rela_id;
                models.Comment.create(report)
                    .then(report => {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json({ success: true, status: 'Post comment succesfully!' });
                    }, (err) => next(err))
            }
        }, (err) => next(err))
            .catch(err => next(err))
    });

module.exports = parkRouter;