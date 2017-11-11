import React, {Component} from 'react';
import HelloMessage from '../2-HelloMessage/HelloMessage';
import "./ChatBubble.css";
import ChatBubble from "../4-ChatBubble/ChatBubble";

class ChatList extends Component {
    render() {
        return <div>
            {
                this.props.messages.map(m=>
                <ChatBubble >);
            }
        </div>;
    }
}

export default ChatList;