const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/UserRouter');
const genresRouter  = require('./routes/GenreRouter')
const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// user router
app.use('/users', usersRouter);
// genre router
app.use('/genres', genresRouter)
// shows router
app.use('/shows', showsRouter)

module.exports = app;
