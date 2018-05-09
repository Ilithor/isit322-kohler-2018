import React, { Component } from 'react';
import logo from '../images/Tree-of-Life_Flower-of-Life_Stage.svg';
import 'whatwg-fetch';
import PropTypes from 'prop-types';

class Header extends Component {

    static propTypes={
        file: PropTypes.string,
        status: PropTypes.string,
        result: PropTypes.string
    };

    render() {
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>Welcome to React</h2>
            </div>
        );
    }
}

export default Header;