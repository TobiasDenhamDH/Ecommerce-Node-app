let createError = require('http-errors');
let express = require('express');
let path = require('path');
let session = require('express-session');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let mainRouter = require('./routes/main');
let usersRouter = require('./routes/users');
let productRouter = require('./routes/product');
let searchRouter = require('./routes/search-result');
const db = require('./database/models');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'proyecto_integrador',
  resave: false,
  saveUninitialized: true

}));

// pasar datos de session a locals
app.use(function(req,res,next){

  res.locals.user = req.session.user

  return next()
})

app.use(function(req, res, next){
  //chequear que no tengamos usuario en sessión y si tengamos cookie
  if(req.session.user == undefined && req.cookies.userId !== undefined){
    //Buscar el usario de la base de datos
       db.User.findByPk(req.cookies.userId)
            .then( function(user){
              //Dentro del then pasar al usario a req.session.user
              //Pasar al usuario locals.user
              // retornar next()
                req.session.user = user
                res.locals.user = user
              
                return next()

            })
            .catch( error => console.log(error))
          } else { //tiene que haber un else
            return next()
          }
})

app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use("/products", productRouter);
app.use("/searchresults", searchRouter);

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
