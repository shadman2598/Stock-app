const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const Pusher = require("pusher");
const pusher = new Pusher({
  appId: "1793795",
  key: "717320b9053b7beb0830",
  secret: "73cb997e62e48e1ef314",
  cluster: "us2",
  useTLS: true
});

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
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
  pusher.trigger("my-channel", "my-event", {
    message: "hello world"
  });

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
