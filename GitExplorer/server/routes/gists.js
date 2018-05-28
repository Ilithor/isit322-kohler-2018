let GitHub = require('github-api');
const token = require('./tokens');
let express = require('express');
let router = express.Router();

let getGitHub = function() {
    let gh;
    gh = new GitHub({
        token: token,
        username:'Ilithor'
    });
    return gh;
};

router.get('/add-basic-list', function(request, response) {
    console.log('ADD TO BASIC LIST');
    try {
        let gh = getGitHub();
        const me = gh.getUser();
        console.log('ME', me);
        me.create({
            public: true,
            description: '',
            files: {
                '': {
                    content: ''
                }
            }
        }).then(function({data}) {
            let createdGist = data;
            return me.read();
        });
            response.status(200).send({
                count: results.length,
                result: results
            })
            .catch(function (err) {
                console.log(err);
                throw err;
            });
    }catch(exc) {
        console.log(exc);
        response.status(500).send({result: exc});
    }
});

router.get('/get-basic-list', function(request, response) {
    console.log('GET BASIC LIST CALLED');
    try {
        let gh = getGitHub();
        const me = gh.getUser();
        console.log('ME', me);
        me
            .listGists()
            .then(function ({data}) {
                console.log('derp');
                console.log('FILES PROMISE', Object.keys(data[0].files));
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
            .catch(function (err) {
                console.log(err);
                throw err;
            });
    }catch(exc){
        console.log(exc);
        response.status(500).send({result: exc});
    }
});

module.exports = router;
