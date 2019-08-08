var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport');
const cors = require('cors');
const app = express();
const passportconfig = require('./config/passport');
const avatar = require('./config/avatar')
const graphQL = require('./config/graphql');
const mongoose = require('./config/mongoose');
const modelware = require('./config/modelware');
const uuidv1 = require('uuid/v1');
const radomString = require('randomstring');

const socketIO = require('socket.io');
const server = app.listen(process.env.PORT);
const io = socketIO(server);

io.sockets.on("connection", (socket) => {
  console.log(socket.id);
})

// Setup routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authroutes = require('./routes/auth-routes');

// Setup Modelware
modelware.InstitutionModel();
modelware.FacultyModel();
modelware.DepartmentModel();
modelware.LevelModel();
modelware.CalendarType();
modelware.LecturerOption();
modelware.CourseModel();
modelware.ColorModel();
modelware.UserroleModel();


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

mongoose.Mongoose();

// import all routers
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authroutes);

// Import GraphQL schemas
graphQL.GraphQL(app, cors);

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