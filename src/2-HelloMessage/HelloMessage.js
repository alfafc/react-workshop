import React, {Component} from 'react';
import Message from './Message';

class HelloMessage extends Component {
    render() {
        return <Message message={"Hello Mark!"}/>;
    }
}

export default HelloMessage;