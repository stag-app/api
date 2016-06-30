"use strict";

var express = require('express');
var router = express.Router();

var data = [];

router.get('/', function(req, res, next) {
  res.json(data);
});

router.get('/nfc', (req, res) => {
  var id = req.query.id;

  if(id == "-27_37_25_76") id = "Bart Langelaan";
  if(id == "21_-100_87_107") id = "Samson Evertsz";
  if(id == "87_125_-41_58") id = "Lisa Uijtewaal";
  if(id == "17_-61_-41_56") id = "Plaisir Nzuzi";
  if(id == "117_-115_36_-36") id = "Tom Maarleveld";

  data.push({
    id: id,
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
