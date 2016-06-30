"use strict";

var express = require('express');
var router = express.Router();

var data = [];

router.get('/', function(req, res, next) {
  res.json(data);
});

router.get('/nfc', (req, res) => {
  data.push({
    id: req.query.id,
    location: "Station Rotterdam",
    count: 0,
    date: new Date()
  });
  res.json(data);
});

router.get('/setCount', (req, res) => {
  data[data.length-1].count = parseInt(req.query.count);
  res.json(data);
});

module.exports = router;
