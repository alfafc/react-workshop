import React, {Component} from 'react';
import PropTypes from 'prop-types';

class HelloMessage extends Component {
    render() {
        return <h1> Hello {this.props.name}! </h1>;
    }
}

// Spec -> https://reactjs.org/docs/typechecking-with-proptypes.html
HelloMessage.propTypes = {name: PropTypes.string};

// Default values
HelloMessage.defaultProps = {name: 'react BOY'};

export default HelloMessage;