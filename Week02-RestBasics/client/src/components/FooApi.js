import React, {Component} from 'react';
import 'whatwg-fetch';
import PropTypes from 'prop-types';

class FooApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: props.appInit.file,
            foo: props.appInit.status,
            result: props.appInit.result
        };
    }
    static propTypes = {
        appInit: PropTypes.shape({
            file: PropTypes.string,
            foo: PropTypes.string,
            result: PropTypes.string
        }),
    };

    queryServer = () => {
        const that = this;
        fetch('/api/foo')
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
        let {result, foo, file} = this.state;
        return (
            <div className="App-intro">
                <p>
                    foo: {foo} file: {file} result: {result}
                </p>
                <button onClick={this.queryServer}>Query API</button>
            </div>
        );
    }
}

export default FooApi;