var jwt = require('jsonwebtoken');
const { dbConnect } = require('./connectDB');
var models = require('./models/models');
var config = require('./config');
var FacebookTokenStrategy = require('passport-facebook-token');
var passport = require('passport');

exports.getToken = function(user) {
    return jwt.sign(user, config.secretKey, {expiresIn: 3600});
}

// exports.facebookPassport = passport.use(new FacebookTokenStrategy({
//     clientID: config.facebook.clientId,
//     clientSecret: config.facebook.clientSecret
//   }, (accessToken, refreshToken, profile, next) => {
//     dbConnect.query("SELECT * FROM account WHERE facebookId = '" + profile.id +"';", {
//         type: dbConnect.QueryTypes.SELECT
//     }) .then((result) => {
//         if (result.length == 0) {
//             models.Account.create({username: profile.displayName, facebookId: profile.id, firstname: profile.name.givenName, lastname: profile.name.familyName })
//             .then(() => {
//                 console.log('User created ');
//                 res.json();
//             }, (err) => next(err));
//         } else {
//             var err = new Error('Account already exist!');
//             err.status = 403;
//             return next(err);
//         }
//     }) 
//   }
// ));

exports.verifyUser = (req, res, next) => {
    if (!req.signedCookies.token) {
        var err = new Error('You are not login!');
        err.status = 401;
        return next(err);
    }
    else {
        var token = req.signedCookies.token;
        try {
            var decode = jwt.verify(token, config.secretKey).id;
        } catch(error) {
            var err = new Error('Token wrong!');
            err.status = 403;
            return next(err);
        }
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
    if (!req.signedCookies.token) {
        var err = new Error('You are not login!');
        err.status = 401;
        return next(err);
    }
    else {
        var token = req.signedCookies.token;
        try {
            var decode = jwt.verify(token, config.secretKey).id;
        } catch(error) {
            var err = new Error('Token wrong!');
            err.status = 403;
            return next(err);
        }
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
    if (!req.signedCookies.token) {
        var err = new Error('You are not login!');
        err.status = 401;
        return next(err);
    }
    else {
        var token = req.signedCookies.token;
        try {
            var decode = jwt.verify(token, config.secretKey).id;
        } catch(error) {
            var err = new Error('Token wrong!');
            err.status = 403;
            return next(err);
        }
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
