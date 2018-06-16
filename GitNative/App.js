import Micros from './Micro01';
import React from 'react';
import { View } from 'react-native';
import styles from './elf-styles';
import { NativeRouter, Route } from 'react-router-native';
import PropTypes from 'prop-types';
import appInit from './app-init';
import GitUser from './GitUser';
import ElfHeader from './ElfHeader';

export default class App extends React.Component {
    static propTypes = {
        file: PropTypes.string,
        status: PropTypes.string,
        result: PropTypes.string
    };

    render() {
        return (
            <NativeRouter>
                <View style={styles.container}>
                    <ElfHeader/>
                    <Route path="/" component={GitUser} appInit={appInit}/>
                    <Route path="/foobar/bar" component={Micros} appInit={appInit}/>
                </View>
            </NativeRouter>
        );
    }
}