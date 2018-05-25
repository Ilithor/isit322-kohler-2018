let GitHub = require('github-api');
const token = require('./tokens');

let getGitHub = function() {
    let gh;
    if (true) {
        gh = new GitHub({
            token: token
        });
    } else {
        gh = new GitHub({
            username: 'ilithor',
            password: ''
        });
    }
    return gh;
};

module.exports = getGitHub;