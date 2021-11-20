var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var FileStore = require('session-file-store');
var passport = require('passport');
var authenticate = require('./authenticate');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var models = require('./models/models');
var {dbConnect} = require('./connectDB');
var username = "MomThu";
var password = "1234";
  dbConnect.query("select * from account where username = '"+username+"'")
            .then((result) => {
                if(result == null) {
                    var newUser = new Object();
                    newUser.username = username;
                    newUser.password = password;
                    var insertQuery = "INSERT INTO account ( username, password ) values ('" + username +"','"+ password +"')";
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

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());

app.use(passport.initialize());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
