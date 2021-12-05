var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var FileStore = require('session-file-store')(session);
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ownRouter = require('./routes/own.router');
var parkRouter = require('./routes/park.user.router');
var authenRouter = require('./routes/authen.router');
var config = require('./config');
const { cors, corsWithOptions } = require('./routes/cors');

var app = express();

app.use(corsWithOptions);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser(config.cookieKey));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

app.use('/authen', authenRouter);





app.use('/users', usersRouter);
app.use('/own', ownRouter)
app.use('/parks', parkRouter);
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
