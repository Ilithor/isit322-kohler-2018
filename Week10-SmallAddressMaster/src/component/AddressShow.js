import React, { Component } from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import Paper from "@material-ui/core/es/Paper/Paper";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },
    container: {
        flewGrow: 1,
        textAlign: 'center'
    },
    rootBar: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 8,
        paddingRight: 8,
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit *3
    }),
});

class Address extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editOpen: false,
            edits: {
                _id: 'unknown',
                firstName: 'unknown',
                lastName: 'unknown'
            }
        };
    }

    setEdits = (name, event) => {
        let data = this.props.name;
        data[name] = event.target.value;
        this.setState({edits: data});
    };

    addressEdit = address => {
        console.log(address);

        if (!address) {
            return this.setState({editOpen: false});
        }

        this.setState({
            edits: address,
            editOpen: false
        });
    };

    save = () => {
        this.props.save(this.state.edits);
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <Paper className={classes.rootBar}>
                    <p>{this.props.name.firstName}</p>
                    <p>{this.props.name.lastName}</p>
                    <Button
                        color="secondary"
                        variant="raised"
                        onClick={this.props.showAddress}
                    >
                        Show
                    </Button>
                    <Button
                        color="secondary"
                        variant="raised"
                        onClick={event => this.props.setAddress(-1, event)}
                    >
                        Back
                    </Button>
                    <Button
                        color="secondary"
                        variant="raised"
                        onClick={event => this.props.setAddress(1, event)}
                    >
                        Forward
                    </Button>
                    <div>
                        <Button
                            color="secondary"
                            variant="raised"
                            onClick={() => this.setState({editOpen: true})}
                        >
                            Edit
                        </Button>
                        <Button
                            color="secondary"
                            variant="raised"
                            onClick={event =>
                                this.props.delete(this.props.name, event)
                            }
                        >
                            Delete
                        </Button>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default Address;
