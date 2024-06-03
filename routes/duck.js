var express= require('express');
var router= express.Router();
const request= require('request');

router.get('/', async(req, res) =>{
request(' https://random-d.uk/api/random', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            res.json(data);
        }
    });
})
module.exports= router;