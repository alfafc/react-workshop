import React, {Component} from 'react';
import ChatBubble from "../4-ChatBubble/ChatBubble";

class ChatList extends Component {
    render() {
        let key = 0;

        return <div>
            {
                this.props.messages.map(m => {
                    return <ChatBubble key={key++} message={m.text}/>;
                })
            }
        </div>;
    }
}

let messages = [];
for (let i = 0; i < 10; i++) {
    messages.push({text: "hi " + i});
}

ChatList.defaultProps = {messages: messages};

export default ChatList;