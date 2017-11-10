import React, {Component} from 'react';
import PropTypes from 'prop-types';

class HelloMessage extends Component {
    render() {

        return (
            <div>
                Hello {this.props.name || 'react boy'}!
            </div>
        );
    }
}

HelloMessage.propTypes = {
    name: PropTypes.string
};

export default HelloMessage;