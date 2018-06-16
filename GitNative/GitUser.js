import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import styles from './elf-styles';


export default class GitUser extends React.Component {

    queryServer = () => {
        const that = this;
        fetch('http://192.168.0.125/git-api/user')
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
                    title="Get Data"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                {/* Eventually we will link in GitUser.ui here, but not yet. */}
                {/* For now, just comment it out, using the syntax I have used here. */}
            </View>
        );
    }
}

