var jwt = require('jsonwebtoken');
const { dbConnect } = require('./connectDB');
var models = require('./models/models');

var config = require('./config');

exports.getToken = function(user) {
    return jwt.sign(user, config.secretKey, {expiresIn: 3600});
}

exports.verifyUser = (req, res, next) => {
    if (!req.headers.authorization) {
        var err = new Error('You are not login!');
        err.status = 401;
        return next(err);
    }
    else {
        var token = req.headers.authorization.split(' ')[1];
        try {
            var decode = jwt.verify(token, config.secretKey).id;
        } catch(error) {
            var err = new Error('Token wrong!');
            err.status = 403;
            return next(err);
        }
        console.log(decode);
        dbConnect.query("SELECT * FROM user WHERE user_id = '" + decode +"';", {
            type: dbConnect.QueryTypes.SELECT
        }) .then((result) => {
            if (result.length == 0) {
                var err = new Error('Token wrong!');
                err.status = 403;
                return next(err);
            } else {
                return next();
            }
        })
    }
}

exports.verifyOwner = (req, res, next) => {
    if (!req.headers.authorization) {
        var err = new Error('You are not login!');
        err.status = 401;
        return next(err);
    }
    else {
        var token = req.headers.authorization.split(' ')[1];
        try {
            var decode = jwt.verify(token, config.secretKey).id;
        } catch(error) {
            var err = new Error('Token wrong!');
            err.status = 403;
            return next(err);
        }
        console.log(decode);
        dbConnect.query("SELECT * FROM owner WHERE own_id = '" + decode +"';", {
            type: dbConnect.QueryTypes.SELECT
        }) .then((result) => {
            if (result.length == 0) {
                var err = new Error('Token wrong!');
                err.status = 403;
                return next(err);
            } else {
                return next();
            }
        })
    }
}

exports.verifyAdmin = (req, res, next) => {
    if (!req.headers.authorization) {
        var err = new Error('You are not login!');
        err.status = 401;
        return next(err);
    }
    else {
        var token = req.headers.authorization.split(' ')[1];
        try {
            var decode = jwt.verify(token, config.secretKey).id;
        } catch(error) {
            var err = new Error('Token wrong!');
            err.status = 403;
            return next(err);
        }
        console.log(decode);
        dbConnect.query("SELECT * FROM admin WHERE admin_id = '" + decode +"';", {
            type: dbConnect.QueryTypes.SELECT
        }) .then((result) => {
            if (result.length == 0) {
                var err = new Error('Token wrong!');
                err.status = 403;
                return next(err);
            } else {
                return next();
            }
        })
    }
}
