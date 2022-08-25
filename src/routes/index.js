var express = require('express');
var router = express.Router();
var Contact = require('../models/contact');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const contacts = await Contact.find();
  res.render('index', { title: 'Express', contacts });
});

module.exports = router;
