import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

class AddressFields extends Component {
    render() {
        return (
            <div>
                <TextField
                    autoFocus
                    margin="dense"
                    id="firstName"
                    label="First Name"
                    type="string"
                    value={this.props.address.firstName}
                    onChange={e => this.props.addressChangedByUser('firstName', e)}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    id="lastName"
                    label="Last Name"
                    type="string"
                    value={this.props.address.lastName}
                    onChange={e => this.props.addressChangedByUser('lastName', e)}
                    fullWidth
                />
            </div>
        );
    }
}

AddressFields.propTypes = {
    addressChangedByUser: PropTypes.func,
    address: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string
    })
};

export default AddressFields;