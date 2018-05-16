import React, {Component} from 'react';
import {
    Button,
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class ReactNativeStarter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foo: 'expo try state'
        };

    }

    fetchAddress = () => {
        //this.setState({foo:'fetcher king'});
        const that = this;
        const ip = 'ccalvert.com';
        fetch('http://' + ip + ':30027/you-rang')
            .then((response) => response.json())
            .then(function(result) {
                this.collection = result.allData;
                that.setState({
                    foo: result.result,
                });
            }).catch(function(ex) {
            that.setState({foo: 'qux error'});
        });
    };

    render() {
        console.log('tst');

        return (
            <View style={styles.container}>
                <Text>Getting started now</Text>
                <Text style={styles.instructions}>
                    {this.state.foo}
                </Text>

                <Button
                    onPress={this.fetchAddress}
                    title="Get Data"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


AppRegistry.registerComponent('ReactNativeStarter', () => ReactNativeStarter);
