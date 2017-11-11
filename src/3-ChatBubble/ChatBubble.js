import React, {Component} from 'react';
import HelloMessage from '../2-HelloMessage/HelloMessage';
import "./ChatBubble.css";

class ChatBubble extends Component {

    componentDidMount() {
        this.ticks = 0;
        this.interval = setInterval(() => this.ticks++, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return <div>
            <div className="speech-bubble">
                {this.props.message}
            </div>
            <div className="speech-bubble-triangle">
            </div>
        </div>;
    }
}

export default ChatBubble;