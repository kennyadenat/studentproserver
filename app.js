var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const passport = require('passport');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');
const keys = require('./config/key');
const cors = require('cors');
const passportconfig = require('./config/passport');

// Setup routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const authroutes = require('./routes/auth-routes');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session())

mongoose.connect(keys.mongodb.url, {
    promiseLibrary: require('bluebird'),
    useNewUrlParser: true
  })
  .then(() => console.log('Connection successfully established'))
  .catch((err) => console.log(err));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authroutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;