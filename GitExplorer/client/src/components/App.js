import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import ElfHeader from './ElfHeader';
import ApiFoo from './FooApi';
import Micro01 from './Micro01';
import GitUser from './GitUser';
import PropTypes from 'prop-types';
import appInit from '../app-init';
import {BrowserRouter, Route} from "react-router-dom";

class App extends Component {

    static propTypes = {
        file: PropTypes.string,
        status: PropTypes.string,
        result: PropTypes.string
    };

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <ElfHeader/>
                    <Route exact path="/"
                           render={(props) => (
                               <GitUser {...props}
                                        appInit={appInit} />
                           )}
                    />
                    <Route exact path="/foobar/bar"
                           render={(props) => (
                               <Micro01 {...props}
                                        appInit={appInit} />
                           )}
                    />
                    <Route exact path="/api/foo"
                           render={(props) => (
                               <ApiFoo {...props}
                                       appInit={appInit} />
                           )}
                    />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
