const express = require('express');
const router = express.Router();
const requester = require('request');

router.get('/add-basic-list', function(request, response) {
    requester('http://localhost:30028/add-basic-list').pipe(response);
});

router.get('/get-basic-list', function(request, response) {
    requester('http://localhost:30028/get-basic-list').pipe(response);
});

router.get('/delete', function(request, response, next) {
    requester('http://localhost:30028/delete').pipe(response);
});

module.exports = router;
