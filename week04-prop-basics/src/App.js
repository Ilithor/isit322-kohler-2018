import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {

    static propTypes = {
        appInit: PropTypes.shape({
            testProp: PropTypes.number
        })
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <p>testProp: {this.props.myProps.testProp}</p>
                <p>myProps: {this.props.testProp}</p>
            </div>
        );
    }
}

export default App;
