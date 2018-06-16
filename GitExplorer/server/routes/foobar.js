const express = require('express');
const router = express.Router();
const requester = require('request');

router.get('/bar', function(request, response) {
    requester('http://localhost:30030/bar').pipe(response);
});

module.exports = router;