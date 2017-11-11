import React, {Component} from 'react';
import Message from './../2-HelloMessage/Message';

class HelloYourName extends Component {
    render() {
        return <Message message={`Hello ${this.props.name}!`}/>;
    }
}

export default HelloYourName;