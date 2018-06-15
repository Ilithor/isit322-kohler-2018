const express = require('express');
const router = express.Router();

router.get('/you-rang', function(request, response) {
    response.send({
        'result': 'success from 30030',
        'path': request.params.id
    });
});

router.get('/bar', function(request, response) {
    const message = { 'result': 'Hello' };
    console.log('Bar answered:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

module.exports = router;