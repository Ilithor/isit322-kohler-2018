import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './elf-styles';
import { FontIcon, RaisedButton } from 'material-ui';
import { red500 } from 'material-ui/styles/colors';

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
        fetch('/git-api/user')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(() => json);
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    render() {
        let { body } = this.state;
        return (
            <div className="App-intro">
                <p>
                    <img src={body.avatar_url} alt="" />
                </p>
                <p>
                    login: <input type="text" value={body.login} />
                </p>
                <p>
                    Url: <input type="text" value={body.url} />
                </p>
                <p>
                    HTML Url: <input type="text" value={body.html_url} />
                </p>
                <p>
                    Followers URL:{' '}
                    <input type="text" value={body.followers_url} />
                </p>
                <RaisedButton
                    label="Query Git User"
                    labelPosition="before"
                    primary={true}
                    icon={
                        <FontIcon class="material-icons" color={red500}>
                            rss_feed
                        </FontIcon>
                    }
                    style={styles.button}
                    onClick={this.queryServer}
                />
            </div>
        );
    }
}

export default GitUser;
