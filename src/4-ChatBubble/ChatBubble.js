import React, {Component} from 'react';
import moment from 'moment';
import "./ChatBubble.css";

class ChatBubble extends Component {

    constructor(props) {
        super(props);
        this.state = {ticks: 0};
    }

    componentDidMount() {
        let self = this;
        this.interval = setInterval(() =>
                self.setState({ticks: self.state.ticks + 1}),
            1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {

        return <div className="chat-bubble">
            <div className="bubble">
                <span className="bubble-time">
                    {moment().add(this.ticks * -1, 's').fromNow()}
                    </span>
                {this.props.message}
            </div>
            <div className="bubble-triangle">
            </div>
        </div>;
    }
}

export default ChatBubble;