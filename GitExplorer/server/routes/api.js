const express = require('express');
const router = express.Router();
const requester = require('request');

/* Set up a route called foo. */
router.get('/foo', function(request, response, next) {
    requester('http://localhost:30027/foo').pipe(response);
});

module.exports = router;