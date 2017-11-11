import React, {Component} from 'react';
import moment from 'moment';
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
                <span className="bubble-time">{moment().add(this.ticks * -1, 's').fromNow()}</span>
                {this.props.message}
            </div>
            <div className="speech-bubble-triangle">
            </div>
        </div>;
    }
}

export default ChatBubble;