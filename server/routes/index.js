const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

app.use('/auth', require('./routes/auth'));

module.exports = router;
