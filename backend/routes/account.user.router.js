const express = require('express');
const models = require('../models/models');
const { dbConnect } = require('../connectDB');
const authenticate = require('../authenticate');
const { response } = require('../app');

const accountRouter = express.Router();

accountRouter.use(express.json());

//Fetch User Info
accountRouter.route('/info')
    .get(authenticate.verifyUser, (req, res, next) => {
        let id = authenticate.getAccountId(req);
        dbConnect.query("SELECT username, firstname, lastname, address, phone, email, (SELECT isactivated FROM user WHERE user_id = id) AS isActivated"
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
        console.log(infoObj);
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
accountRouter.route('/parking')
    .get(authenticate.verifyUser, (req, res, next) => {
        let user_id = authenticate.getAccountId(req);
        dbConnect.query("SELECT p.name, p.location, pkg.parking_id, pkg.createdAt AS open, pkg.status, (SELECT phone FROM account WHERE id = p.own_id) AS phone, "
            + "(SELECT email FROM account WHERE id = p.own_id) AS email, "
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
    .delete(authenticate.verifyUser, (req, res, next) => {
        models.Parking.destroy({
            where: {
                parking_id: req.body.parking_list
            }
        }).then(() => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({ success: true, status: 'Delete parking succesfully!' });
        }, (err) => next(err))
        .catch(err => next(err));
    })

//Fetch Favourite Park
accountRouter.route('/favorite')
    .get(authenticate.verifyUser, (req, res, next) => {
        let user_id = authenticate.getAccountId(req);
        dbConnect.query("SELECT p.name, p.location, p.description, p.price, f.flist_id, (SELECT phone FROM account WHERE id = p.own_id) AS phone, "
            + "(SELECT email FROM account WHERE id = p.own_id) AS email, "
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
        if (favoObj.isMark == true) {
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
        } else {
            dbConnect.query("SELECT flist_id FROM favorite WHERE rela_id = (SELECT rela_id FROM park_user " 
            + "WHERE park_id = " + favoObj.park_id + " AND user_id = " + user_id + ");", {
                type: dbConnect.QueryTypes.SELECT
            }).then(result => {
                var flist_id = result[0].flist_id;
                models.Favorite.destroy({
                    where: {
                        flist_id: flist_id
                    }
                }).then(() => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json({ success: true, status: 'Delete favorite park succesfully!' });
                }, (err) => next(err))
                    .catch(err => next(err));
            })
        }
    })
    .delete(authenticate.verifyUser, (req, res, next) => {
        console.log(req.body);
        models.Favorite.destroy({
            where: {
                flist_id: req.body.flist_list
            }
        }).then(() => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({ success: true, status: 'Delete favorite succesfully!' });
        }, (err) => next(err))
        .catch(err => next(err));
    })


//Create and delete favorite park
accountRouter.route('/favorite/:flistid')
    .delete(authenticate.verifyUser, (req, res, next) => {
        models.Favorite.destroy({
            where: {
                flist_id: req.params.flistid
            }
        }).then(() => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({ success: true, status: 'Delete favorite park succesfully!' });
        }, (err) => next(err))
            .catch(err => next(err));
    })

accountRouter.route('/pending')
    .get(authenticate.verifyUser, (req, res, next) => {
        let user_id = authenticate.getAccountId(req);
        dbConnect.query("SELECT pe.pending_id, p.name, p.location, p.description, p.price, pe.time_start, pe.status, (SELECT phone FROM account WHERE id = p.own_id) AS phone, "
            + "(SELECT email FROM account WHERE id = p.own_id) AS email, "
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
    .post(authenticate.verifyUser, (req, res, next) => {
        let user_id = authenticate.getAccountId(req);
        dbConnect.query("SELECT isactivated FROM user WHERE user_id = " + user_id + ";", {
            type: dbConnect.QueryTypes.SELECT
        }).then(result => {
            if (result[0].isactivated == false) {
                res.statusCode = 403;
                res.setHeader('Content-Type', 'application/json');
                res.json({ message: "Bạn cần xác minh tài khoản trước khi sử dụng chức năng này" });
            } else {
                dbConnect.query("SELECT * FROM park_user WHERE park_id = " + req.body.park_id + " AND user_id = " + user_id + ";", {
                    type: dbConnect.QueryTypes.SELECT
                }).then(result => {
                    if (result.length == 0) {
                        models.Park_User.create({park_id: req.body.park_id, user_id: user_id})
                        .then(rela => {
                            models.Pending.create({rela_id: rela.dataValues.rela_id, time_start: req.body.timein, status: 'Đang đặt trước'})
                            .then( () => {
                                res.statusCode = 201;
                                res.setHeader('Content-Type', 'application/json');
                                res.json({success: true});
                            }, err => next(err))
                        }, err => next(err))
                    } else {
                        models.Pending.create({rela_id: result[0].rela_id, time_start: req.body.timein, status: 'Đang đặt trước'})
                        .then(() => {
                            res.statusCode = 201;
                            res.setHeader('Content-Type', 'application/json');
                            res.json({success: true});
                        })
                    }
                }, err => next(err))
                
            }
        }, err => next(err))
        .catch(err => next(err));
    })
    .delete(authenticate.verifyUser, (req, res, next) => {
        models.Pending.update({status: 'Đã hủy'}, {
            where: {
                pending_id: req.body.pending_list
            }
        }).then(() => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({ success: true, status: 'Delete pending succesfully!' });
        }, (err) => next(err))
        .catch(err => next(err));
    })


accountRouter.route('/pending/:pendingid')
    .delete(authenticate.verifyUser, (req, res, next) => {
        models.Pending.destroy({
            where: {
                pending_id: req.params.pendingid
            }
        }).then(() => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({ success: true, status: 'Delete pending succesfully!' });
        }, (err) => next(err))
            .catch(err => next(err));
    })


module.exports = accountRouter;