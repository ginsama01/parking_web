var passport = require('passport');
var LocalStragety = require('passport-local').Strategy;
var User = require('./models/user.model');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config');
var {dbConnect} = require('./connectDB');

passport.use('local-signup', new LocalStragety(
    function(username, password, done) {
        // User.findOne({username: username}, function(err, user) {
        //     if(err) { return done(err); }
        //     if(!user) {
        //         return done(null, false, { message: 'Incorrect username.'});
        //     }
        //     if(!user.validPassword(password)) {
        //         return done(null, false, { message: 'Incorrect password.'});
        //     }
        // })
        dbConnect.query("select * from user where username = '"+username+"'")
            .then((result) => {
                if(result == null) {
                    var newUser = new Object();
                    newUser.username = username;
                    newUser.password = password;
                    var insertQuery = "INSERT INTO user ( username, password ) values ('" + username +"','"+ password +"')";
                    console.log(insertQuery);
                    dbConnect.query(insertQuery)
                        .then(() => {
                            console.log("Insert new user successfully!");
                        }, (err) => next(err))
                        .catch((err) => console.log(err));
                } else {
                    console.log('This account is alredy exist.');
                }
            }, (err) => next(err))
            .catch((err) => console.log(err));
    }
));
passport.serializeUser(function(user, done) {
    done(null, user._id);
});
passport.deserializeUser(function(id, done) {
    User.findbyId(id, function(err, user) {
        done(err, user);
    })
});

//tao token
exports.getToken = function(user) {
    return jwt.sign(user, config.secretKey, {expiresIn:3600});
};

var opts = {};
//trich xuat tu` tieu de
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretKey;

//passport va chien luoc moi
exports.jwtPassport = passport.use(new JwtStrategy(opts,
    (jwt_payload, done) => {
        console.log("JWT payload: ", jwt_payload);
        User.findOne({_id: jwt_payload._id}, (err, user) => {
            if (err) {
                return done(err, false);
            }
            else if (user) {
                return done(null, user);
            }
            else {
                return done(null, false);
            }
        });
    }));

exports.verifyUser = passport.authenticate('jwt', {session: false});

exports.verifyAdmin = function(req, res, next) {
    if (req.user.admin == true) {
        return next();
    }
    else {
        var err = new Error("You are not authorized to perform this operation!");
        err.status = 403;
        return next(err);
    }
}


