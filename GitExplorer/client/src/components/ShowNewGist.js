import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {RaisedButton} from 'material-ui';
import button from './elf-styles';
import GistDisplay from './gist/components/gistDisplay';

let i = 0;

class ShowNewGist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gistList: props.appInit.result+''
        };
    }

    static propTypes = {
        appInit: PropTypes.shape({
            result: PropTypes.string
        })
    };

    showGist = () => {
        const that = this;
        fetch('/gists/get-basic-list')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                console.log('parsed json', json);
                let newState = {
                    gistList:json
                };
                that.setState(() => newState);
            })
            .catch(function (ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    newGist = () => {
        const that = this;
        fetch('/gists/add-basic-list')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                console.log('parsed json', json);
                let newState = {
                    gistList: json
                };
                that.setState(() => newState);
            })
            .catch(function (ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    render() {
        console.log(this.state);
        let {gistList} = this.state;
        let displayContent;
        if (gistList) {
            displayContent = (
                <div>
                    <h4>ShowNewGist</h4>
                    {/*<pre>*/}
                        {/*{JSON.stringify(gistList, null, 4)}*/}
                    {/*</pre>*/}
                    {gistList.result && <GistDisplay gist={gistList.result[i]}/>}
                </div>
            );
        } else {
            displayContent =
                <div>
                    <h4>ShowNewGist</h4><h1>WOAAAHHH</h1> <p>There was no valid gist data returned!</p></div>;
        }
        return <div className={'App-intro'}>
            <RaisedButton
                style={button}
                id="showGist"
                onClick={(e) => this.showGist('showGist', e)}
                //disabled={!this.props.gistCanIterate}
                secondary={true}
            >
                Display
            </RaisedButton>
            <RaisedButton
                style={button}
                id="nextGist"
                onClick={(e) => this.newGist('nextGist', e)}
                secondary={true}
            >
                Next
            </RaisedButton>
            {displayContent}
        </div>

    }
}

export default ShowNewGist;
