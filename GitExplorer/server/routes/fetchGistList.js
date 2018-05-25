import * as logger from 'debug';

let express = require('express');
let router = express.Router();
let getGitHub = require('/gists');

router.get('/gists/get-basic-list', function(request, response) {
    logger.log('GET BASIC LIST CALLED');
    let gh = getGitHub();
    const me = gh.getUser();
    logger.log('ME', me);
    me
        .listGists()
        .then(function({ data }) {
            logger.log('FILES PROMISE', Object.keys(data[0].files));
            const results = data.map(item => ({
                htmlUrl: item.html_url,
                id: item.id,
                gitPullUrl: item.git_pull_url,
                description: item.description,
                ownerLogin: item.owner.login,
                avatarUrl: item.owner.avatar_url,
                files: Object.keys(item.files)
            }));
            response.status(200).send({
                count: results.length,
                result: results
            });
        })
        .catch(function(err) {
            logger.log('USER Promise Rejected', err);
            response.status(500).send({ result: err });
        });
});

module.exports = router;