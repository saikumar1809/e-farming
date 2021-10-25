const path = require('path');
const express = require('express');
const mongoSanitize = require('express-mongo-sanitize');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/userRoutes');
const tipsRouter = require('./routes/tipRoutes');
const viewsRouter = require('./routes/viewRoutes');
const complaintRouter = require('./routes/complaintRoutes');
const advertismentRouter = require('./routes/advertismentRoutes');
const app = express();
//Body parser,reading data from body to req.body
app.use(
  express.json({
    limit: '10kb',
  })
);
app.use(cookieParser());
app.enable('trust proxy');
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
//Routes
app.use('/', viewsRouter);
app.use('/users', userRouter);
app.use('/complaints', complaintRouter);
app.use('/tips', tipsRouter);
app.use('/advertisment', advertismentRouter);
module.exports = app;
