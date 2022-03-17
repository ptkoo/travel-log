/* eslint linebreak-style: ["error", "windows"] */
const { Router } = require('express');

const LogEntry = require('../models/LogEntry');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const entries = await LogEntry.find();
    res.json(entries);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const logEntry = new LogEntry(req.body);
    const createdEntry = await logEntry.save();
    res.json(createdEntry);
  } catch (error) {
    console.log(error.name);
    if (error.name === 'ValidationError') {
      res.status(422);
    }
    next(error);
  }

  // eslint-disable-next-line no-console
  console.log(req.body);
});

module.exports = router;
