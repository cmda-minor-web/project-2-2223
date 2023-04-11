const express = require('express');
const request = require('request');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('index', {
        title: 'Start page'
    });
});

module.exports = router;