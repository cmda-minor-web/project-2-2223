const express = require('express');
const request = require('request');
const router = express.Router();
const API_KEY = 'dichter-a6a8ae46-4c90'
const options = {
    url: 'https://dichter.responsible-it.nl/api/poetry?type=5&theme=mooi bos warme zomerdag',
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

router.get('/poems', (req, res)=>{
    request.get(options, (error, response, body)=>{
        if(error){
            res.send(error)
            console.log(error)
        }else {
            console.log(body)
            res.render('poems', {
               title: 'Maak je gedichten',
               poemsData: body 
            });
        }
    })
})

router.get('/generate', (req, res)=>{
    request.get(options, (error, response, body)=>{
        if(error){
            res.send(error)
            console.log(error)
        }else {
            console.log(body)
            res.render('generate-poems', {
               title: 'Generating',
               generateData: body 
            });
        }
    })
})


module.exports = router;