var express = require('express');
var router = express.Router();

var usersEndpoints = require('./users');

router.get('/users/me', usersEndpoints.me);

module.exports = router