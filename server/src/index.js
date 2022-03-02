/* eslint-disable no-console */
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const middlewares = require('./middlewares');

const app = express();
app.use(morgan('common'));
app.use(helmet());
app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);
// the default error log is not useful so we set up our own json type error handler

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

// not found middleware (specific)

app.use(middlewares.notFound);

// error handling middleware

app.use(middlewares.errorHandler);

const port = process.env.PORT || 1337;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
