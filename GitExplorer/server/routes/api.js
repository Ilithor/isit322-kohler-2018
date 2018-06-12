const express = require('express');
const router = express.Router();

/* Set up a route called foo. */
router.get('/foo', function(request, response) {
    const message = { 'result': 'success', 'foo': 'bar', 'file': 'api.js' };
    console.log('Foo called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

module.exports = router;