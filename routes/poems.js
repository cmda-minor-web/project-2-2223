const express = require('express');
const request = require('request');
const router = express.Router();
const API_KEY = 'dichter-a6a8ae46-4c90'
const options = {
    url: 'https://dichter.responsible-it.nl/api/types',
    headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
    }
}

router.get('/', function (req, res) {
    res.render('index', {
        title: 'Start page'
    });
});

router.get('/poems', (req, res) => {
    request.get(options, (error, response, body) => {
        if (error) {
            res.send(error)
        } else {
            res.render('poems', {
                title: 'Make your poem',
                data: Object.values(JSON.parse(body).data)
            });
        }
    });
});

router.get('/loading', (req, res)=>{
    res.render('loading', {
        title: 'Poems are loading'
    })
})


router.get('/offline', function(req, res) {
    res.render('offline', {
        title: 'Offline page',
        pageTitle: 'You are offline'
    })
})

router.get('/generate', (req, res) => {
    request.get(options, (error, response, body) => {
        if (error) {
            res.send(error)
        } else {
            res.render('generate-poems', {
                title: 'Make your poem',
                data: Object.values(JSON.parse(body).data)
            });
        }
    });
});

module.exports = router;