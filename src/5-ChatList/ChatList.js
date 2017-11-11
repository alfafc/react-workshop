import React, {Component} from 'react';
import ChatBubble from "../4-ChatBubble/ChatBubble";

class ChatList extends Component {
    render() {
        let key = 0;

        return <div>
            {
                this.props.messages.map(m => {
                    return <ChatBubble key={key++} message={m}/>;
                })
            }
        </div>;
    }
}

export default ChatList;