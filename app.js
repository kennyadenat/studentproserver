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
const mergeSchemas = require('graphql-tools').mergeSchemas;
const passportconfig = require('./config/passport');

const avatar = require('./config/avatar')
// avatar.avatarthree();
// avatar.avatarone();
// avatar.chooseAvatar(avatar.avatarthree());

// Setup routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
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
app.use(cors());

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

// const whitelist = ['http://localhost:4000/', ]
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }


// import all routers
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authroutes);

// import all graphiql schemas
const UserSchema = require('./graphql/user');

const allSchema = mergeSchemas({
  schemas: [
    UserSchema
  ]
})

app.use('/api/keeptime', cors(), graphqlHTTP({
  schema: allSchema,
  rootValue: global,
  graphiql: true
}));

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