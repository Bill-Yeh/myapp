var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product')

var app = express();
// var router = express.Router();
// app.use('/', router)
// router.use(function (req, res, next) {
//   console.log('this is router.use');
//   next();
// });
// app.use(function (req, res, next) {
//   console.log('Time:', Date.now());
//   next();
// });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //__dirname 是node.js關鍵字，代表著目前 app.js所在的‵實體目錄‵喔！
// app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    console.error('err:', err)

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;