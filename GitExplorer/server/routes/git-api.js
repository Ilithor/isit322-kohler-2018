let express = require('express');
let router = express.Router();
let request = require('request');

router.get('/user', function (req, res, next) {
    const options = {
        url: 'https://api.github.com/users/Ilithor',
        headers: {
            'User-Agent': 'request'
        }
    };

    request(options, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        const jsonBody = JSON.parse(body);
        console.log('body:', JSON.stringify(body, null, 4));
        res.send({error: error, response: response, body: jsonBody});
    });

});
module.exports = router;