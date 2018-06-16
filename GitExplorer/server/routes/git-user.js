const express = require('express');
const router = express.Router();
const requester = require('request');

router.get('/you-rang', function (request, response, next) {
    requester('http://localhost:30029/you-rang').pipe(response);
});

router.get('/user', function (request, response, next) {
    requester('http://localhost:30029/user').pipe(response);
});

module.exports = router;