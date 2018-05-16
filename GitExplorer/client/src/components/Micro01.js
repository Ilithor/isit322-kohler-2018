import React, {Component} from 'react';
import 'whatwg-fetch';
import PropTypes from 'prop-types';

class Micro01 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: props.appInit.result
        };
    }
    static propTypes = {
        appInit: PropTypes.shape({
            result: PropTypes.string
        }),
    };

    queryServer = () => {
        const that = this;
        fetch('/foobar/bar')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                console.log('parsed json', json);
                that.setState(foo => (json));
            })
            .catch(function (ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };

    render() {
        let {result} = this.state;
        return (
            <div className="App-intro">
                <p>
                    You Rang: {result}
                </p>
                <button onClick={this.queryServer}>Query Micro You Rang</button>
            </div>
        );
    }
}

export default Micro01;