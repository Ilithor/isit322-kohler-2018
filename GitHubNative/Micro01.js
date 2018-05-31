import React, { Component } from 'react';
import 'whatwg-fetch';
import styles from './elf-styles';
import { Text, View, Button } from 'react-native';

class Micro01 extends Component {

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
        return (
            <View style={styles.buttonView}>
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
