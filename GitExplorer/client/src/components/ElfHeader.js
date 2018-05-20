import React, { Component } from 'react';
import logo from '../images/Tree-of-Life_Flower-of-Life_Stage.svg';
import 'whatwg-fetch';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ElfHeader extends Component {
    static propTypes = {
        file: PropTypes.string,
        status: PropTypes.string,
        result: PropTypes.string
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                    <div>
                        <ul>
                            <li>
                                <Link to="/">Git User</Link>
                            </li>
                            <li>
                                <Link to="/foobar/bar">Micro</Link>
                            </li>
                            <li>
                                <Link to="/api/foo">ApiFoo</Link>
                            </li>
                        </ul>
                    </div>
                </header>
            </div>
        );
    }
}

export default ElfHeader;
