const express = require('express');
const models = require('../models/models');
const { dbConnect } = require('../connectDB');
const authenticate = require('../authenticate');

const accountRouter = express.Router();

accountRouter.use(express.json());

//Fetch User Info
accountRouter.route('/info')
    .get(authenticate.verifyUser, (req, res, next) => {
        let id = authenticate.getAccountId(req);
        dbConnect.query("SELECT username, firstname, lastname, address, phone, email, (SELECT isActivated FROM user WHERE user_id = id) AS isActivated"
        + " FROM account WHERE id = " + id + ";", {
            type: dbConnect.QueryTypes.SELECT
        }).then(result => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result[0]);
        }, (err) => next(err))
        .catch(err => next(err));
    })
    .put(authenticate.verifyUser, (req, res, next) => {
        let user_id = authenticate.getAccountId(req);
        let infoObj = req.body;
        models.Account.update(infoObj, {
            where: {
                id: user_id
            }
        }).then(() => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({ success: true, status: 'Change info succesfully!' });
        }, (err) => next(err))
        .catch(err => next(err));
    })
    .delete(authenticate.verifyUser, (req, res, next) => {
        let user_id = authenticate.getAccountId(req);
        //models.Account.delete
    })

//Fetch Parking History
accountRouter.route('/history')
    .get(authenticate.verifyUser, (req, res, next) => {
        let user_id = authenticate.getAccountId(req);
        dbConnect.query("SELECT p.name, p.location, pkg.parking_id, pkg.createdAt AS open, pkg.price, pkg.status, (SELECT phone FROM account WHERE id = p.own_id) AS phone, " 
        + "(SELECT AVG(rating) FROM comment WHERE rela_id = pu.rela_id) AS rating FROM parking pkg JOIN park_user pu ON pkg.rela_id = pu.rela_id "
        + "JOIN park p ON pu.park_id = p.park_id WHERE pu.user_id = " + user_id + ";", {
            type: dbConnect.QueryTypes.SELECT
        }).then(result => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        }, (err) => next(err))
        .catch(err => next(err));
    })

//Fetch Favourite Park
accountRouter.route('/favorite')
    .get(authenticate.verifyUser, (req, res, next) => {
        let user_id = authenticate.getAccountId(req);
        dbConnect.query("SELECT p.name, p.location, p.description, p.price, f.flist_id, (SELECT phone FROM account WHERE id = p.own_id) AS phone, "
        + "(SELECT AVG(rating) FROM comment WHERE rela_id = pu.rela_id) AS rating FROM favorite f JOIN park_user pu ON f.rela_id = pu.rela_id  "
        + "JOIN park p ON pu.park_id = p.park_id WHERE pu.user_id = " + user_id + ";", {
            type: dbConnect.QueryTypes.SELECT 
        }).then(result => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        }, (err) => next(err))
        .catch(err => next(err));
    })
    .post(authenticate.verifyUser, (req, res, next) => {
        let user_id = authenticate.getAccountId(req);
        let favoObj = req.body;
        dbConnect.query("SELECT * FROM park_user WHERE park_id = " + favoObj['park_id'] + " AND user_id = " + user_id + ";", {
            type: dbConnect.QueryTypes.SELECT
        }).then(result => {
            if (result.length == 0) {
                models.Park_User.create({ "park_id": favoObj['park_id'], "user_id": user_id })
                    .then(rela => {
                        favoObj['rela_id'] = rela.dataValues.rela_id;
                        models.Favorite.create(favoObj)
                            .then(() => {
                                res.statusCode = 201;
                                res.setHeader('Content-Type', 'application/json');
                                res.json({ success: true, status: 'Add favorite succesfully!' });
                            }, (err) => next(err))
                    }, (err) => next(err))
            } else {
                favoObj['rela_id'] = result[0].rela_id;
                models.Favorite.create(favoObj)
                    .then(() => {
                        res.statusCode = 201;
                        res.setHeader('Content-Type', 'application/json');
                        res.json({ success: true, status: 'Add favorite succesfully!' });
                    }, (err) => next(err))
            }
        }, (err) => next(err))
            .catch(err => next(err))
    })

//Delete favorite park
accountRouter.route('/favorite/:flistid')
    .delete(authenticate.verifyUser, (req, res, next) => {
        models.Favorite.destroy({
            where: {
                flist_id: req.params.flistid
            }
        }).then( () => {
            res.statusCode = 204;
            res.setHeader('Content-Type', 'application/json');
            res.json({ success: true, status: 'Delete favorite park succesfully!' });
        }, (err) => next(err))
        .catch(err => next(err));
    })

accountRouter.route('/pending')
    .get(authenticate.verifyUser, (req, res, next) => {
        let user_id = authenticate.getAccountId(req);
        dbConnect.query("SELECT p.name, p.location, p.description, p.price, pe.time_start, pe.time_end"
        + "(SELECT AVG(rating) FROM comment WHERE rela_id = pu.rela_id) AS rating FROM pending pe JOIN park_user pu ON pe.rela_id = pu.rela_id  "
        + "JOIN park p ON pu.park_id = p.park_id WHERE pu.user_id = " + user_id + ";", {
            type: dbConnect.QueryTypes.SELECT 
        }).then(result => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        }, (err) => next(err))
        .catch(err => next(err));
    })

accountRouter.route('/pending/:pendingid')
    .delete(authenticate.verifyUser, (req, res, next) => {
        models.Pending.destroy({
            where: {
                pending_id: req.params.pendingid
            }
        }).then( () => {
            res.statusCode = 204;
            res.setHeader('Content-Type', 'application/json');
            res.json({ success: true, status: 'Delete pending succesfully!' });
        }, (err) => next(err))
        .catch(err => next(err));
    })