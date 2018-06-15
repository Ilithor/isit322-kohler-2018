import React, { Component } from 'react';
import 'whatwg-fetch';
import styles from './elf-styles';
import { Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';

class Micro01 extends Component {
    constructor(props) {
        super();
        this.state = {
            //result: props.appInit.result
        };
    }
    static propTypes = {
        appInit: PropTypes.shape({
            result: PropTypes.string
        })
    };

    queryServer = () => {
        const that = this;
        fetch('exp://192.168.0.125/foobar/bar')
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
            <View style={styles.buttonView}>
                <Text>You Rang: {result}</Text>
                <Button
                    onPress={this.queryServer}
                    title="Micro"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}

export default Micro01;
