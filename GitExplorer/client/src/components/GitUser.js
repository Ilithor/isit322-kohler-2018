import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './elf-styles';
import {Button} from '@material-ui/core';

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
        })
    };

    queryServer = () => {
        const that = this;
        fetch('/git-user/user')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                console.log('parsed json', json);
                that.setState(() => json);
            })
            .catch(function (ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    render() {
        let {body} = this.state;
        return (
            <div className="App-intro">
                <p>
                    <img src={body.avatar_url} alt="Please log in"/>
                </p>
                <p>
                    login: {body.login}
                </p>
                <p>
                    Url: {body.url}
                </p>
                <p>
                    HTML Url: {body.html_url}
                </p>
                <p>
                    Followers URL: {body.followers_url}
                </p>
                <Button
                    label="Query Git User"
                    variant="raised"
                    color="primary"
                    style={styles.button}
                    onClick={this.queryServer}>
                    Git User
                </Button>
            </div>
        );
    }
}

export default GitUser;
