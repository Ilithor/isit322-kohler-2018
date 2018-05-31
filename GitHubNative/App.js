import Micros from './Micro01';
import React from 'react';
import { View } from 'react-native';
import styles from './elf-styles';
import { NativeRouter, Route } from 'react-router-native';
import GitUser from './GitUser';
import ElfHeader from './ElfHeader';

export default class App extends React.Component {

    render() {
        return (
            <NativeRouter>
                <View style={styles.gitContainer}>
                    <ElfHeader/>
                    <GitUser />
                    <Micros />
                </View>
            </NativeRouter>
        );
    }
}