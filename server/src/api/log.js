/* eslint linebreak-style: ["error", "windows"] */
const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Globe',
  });
});

module.exports = router;
