const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');
const passport = require('./auth/passport');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/UserRouter');
const genresRouter  = require('./routes/GenreRouter');
const showsRouter  = require('./routes/ShowRouter');
const commentsRouter = require('./routes/CommentRouter');
const authRouter = require('./routes/auth');
const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: "NOT_A_GOOD_SECRET",
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
// authentication router
app.use('/auth', authRouter)
// user router
app.use('/users', usersRouter);
// genre router
app.use('/genres', genresRouter)
// shows router
app.use('/shows', showsRouter)
// comments router
app.use('/comments', commentsRouter)
module.exports = app;
