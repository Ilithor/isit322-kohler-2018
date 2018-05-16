import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import Header from './Header';
import ApiFoo from './FooApi';
import Micro01 from './Micro01';
import GitUser from './GitUser';
import PropTypes from 'prop-types';
import appInit from '../app-init';

class App extends Component {

    static propTypes = {
        file: PropTypes.string,
        status: PropTypes.string,
        result: PropTypes.string
    };

    render() {
        return (
            <div className="App">
                <Header/>
                <GitUser appInit={appInit}/>
                <Micro01 appInit={appInit}/>
                <ApiFoo appInit={appInit}/>
            </div>
        );
    }
}

export default App;
