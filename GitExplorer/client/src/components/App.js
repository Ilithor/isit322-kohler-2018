import React, { Component } from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import ElfHeader from './ElfHeader';
import ApiFoo from './FooApi';
import Micro01 from './Micro01';
import GitUser from './GitUser';
import PropTypes from 'prop-types';
import appInit from '../app-init';
import { BrowserRouter, Route } from 'react-router-dom';
import ShowNewGist from './ShowNewGist';

class App extends Component {
    static propTypes = {
        file: PropTypes.string,
        status: PropTypes.string,
        result: PropTypes.string
    };

    queryServer = () => {
        const that = this;
        fetch('/fetchGistList')
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
            <BrowserRouter>
                <div className="App">
                    <ElfHeader />
                    <Route
                        exact
                        path="/"
                        render={props => (
                            <GitUser {...props} appInit={appInit} />
                        )}
                    />
                    <Route
                        exact
                        path="/foobar/bar"
                        render={props => (
                            <Micro01 {...props} appInit={appInit} />
                        )}
                    />
                    <Route
                        exact
                        path="/api/foo"
                        render={props => (
                            <ApiFoo {...props} appInit={appInit} />
                        )}
                    />
                    <Route
                        exact
                        path="/fetchGistList"
                        render={props => (
                            <ShowNewGist {...props} appInit={appInit} />
                        )}
                    />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
