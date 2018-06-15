import React, { Component } from 'react';
import 'whatwg-fetch';
import PropTypes from 'prop-types';
import styles from './elf-styles';
import { Button } from '@material-ui/core';

class Micro01 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: props.appInit.result
        };
    }

    static propTypes = {
        appInit: PropTypes.shape({
            result: PropTypes.string
        })
    };

    queryServer = () => {
        const that = this;
        fetch('/foobar/bar')
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
        let { result } = this.state;
        return (
            <div className="App-intro">
                <p>You Rang: {result}</p>
                <Button
                    label="Query Micro"
                    variant="raised"
                    color="primary"
                    style={styles.button}
                    onClick={this.queryServer}>
                    Micro
                </Button>
            </div>
        );
    }
}

export default Micro01;
