import React, {Component} from 'react';
import { Link } from 'react-router-native';
import {Text, View} from 'react-native';
import styles from "./elf-styles";

class ElfHeader extends Component {

    render() {
        return (
            <View style={styles.nav}>
                <Link
                    to="/"
                    underlayColor='#f0f4f7'
                    style={styles.navItem}>
                    <Text>Git Users</Text>
                </Link>
                <Link
                    to="/foobar/bar"
                    underlayColor='#f0f4f7'
                    style={styles.navItem}>
                    <Text>Micro01</Text>
                </Link>
            </View>
        );
    }
}

export default ElfHeader;
