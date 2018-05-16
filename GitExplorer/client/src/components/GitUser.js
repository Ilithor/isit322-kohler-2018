import React, {Component} from 'react';
import PropTypes from 'prop-types';

class GitUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            body: props.appInit.result
        };
    }
    static propTypes = {
        appInit: PropTypes.shape({
            result: PropTypes.string
        }),
    };

    queryServer = () => {
        const that = this;
        fetch('/git-api/user')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                console.log('parsed json', json);
                that.setState(foo => (json));
            })
            .catch(function (ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };


    render() {
        let {body} = this.state;
        return (
            <div className="App-intro">
                <p>
                    <img src={body.avatar_url} alt=''/>
                </p>
                <p>
                    login: <input type='text' value={body.login} />
                </p>
                <p>
                    Url: <input type='text' value={body.url} />
                </p>
                <p>
                    HTML Url: <input type='text' value={body.html_url} />
                </p>
                <p>
                    Followers URL: <input type='text' value={body.followers_url} />
                </p>
                <button id='gitButton' onClick={this.queryServer}>Query Git API</button>
            </div>
        );
    }
}

export default GitUser;