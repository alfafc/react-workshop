import React, {Component} from 'react';
import ChatBubble from "../4-ChatBubble/ChatBubble";
import Infinite from "react-infinite";

class ChatList extends Component {
    render() {
        let key = 0;
        return <div>
            <Infinite containerHeight={500} elementHeight={50}>
            {
                    this.props.messages.map(m => {
                        return <ChatBubble key={key++} message={m.text}/>;
                    })
                }
            </Infinite>
        </div>;
    }
}

let messages = [];
for (let i = 0; i < 5000; i++) {
    messages.push({text: "hi " + i});
}

ChatList.defaultProps = {messages: messages};

export default ChatList;