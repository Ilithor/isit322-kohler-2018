import React, { Component } from 'react';
import 'whatwg-fetch';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { MenuItem, MuiThemeProvider } from 'material-ui';

class ElfHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    static propTypes = {
        file: PropTypes.string,
        status: PropTypes.string,
        result: PropTypes.string
    };

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <AppBar
                        title="GitExplorer"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        onLeftIconButtonClick={this.handleToggle}
                    />
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <Drawer
                        docked={false}
                        width={200}
                        open={this.state.open}
                        onRequestChange={this.handleToggle}
                    >
                        <AppBar title="Git Explorer" />

                        <MenuItem
                            primaryText="Git User"
                            containerElement={<Link to="/" />}
                            onClick={this.handleToggle}
                        />
                        <MenuItem
                            primaryText="FooApi"
                            containerElement={<Link to="/api/foo" />}
                            onClick={this.handleToggle}
                        />
                        <MenuItem
                            primaryText="Micro01"
                            containerElement={<Link to="/foobar/bar" />}
                            onClick={this.handleToggle}
                        />
                    </Drawer>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default ElfHeader;
