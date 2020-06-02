const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fs = require('fs');
const moment = require('moment');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const librosRouter = require('./routes/libros');
const testsRouter = require('./routes/tests');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); // hbs, ejs, twig, jade, moustache

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ! GESTIÓN DE RUTAS

// Middleware que muestra la fecha por consola
app.use((req, res, next) => {
  console.log(new Date());
  req.fechaActual = new Date();
  next();
});

// Middleware que registra en un fichero las diferentes peticiones
app.use((req, res, next) => {
  fs.appendFileSync('requests.log', `${moment().format('DD/MM/YYYY HH:mm.ss')} - METHOD: ${req.method}. URL: ${req.url}\n`);
  next();
});

app.use((req, res, next) => {
  const hours = (new Date()).getHours();
  if (hours >= 14 && hours <= 17) {
    return res.send('La appweb está cerrada.');
  }
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/libros', librosRouter);
app.use('/tests', testsRouter);

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
