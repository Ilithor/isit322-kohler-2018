var express = require('express');
var router = express.Router();

router.get('/bar', function(request, response) {
    var message = { 'result': 'Hello' };
    console.log('Bar answered:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

module.exports = router;