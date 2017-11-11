import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Message extends Component {
    render() {
        return <h1>{this.props.message}</h1>;
    }
}

// Spec -> https://reactjs.org/docs/typechecking-with-proptypes.html
Message.propTypes = {message: PropTypes.string};

// Default values
Message.defaultProps = {message: 'react BOY'};

export default Message;