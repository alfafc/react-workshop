import React, {Component} from 'react';
import ChatBubble from "../4-ChatBubble/ChatBubble";
import {Motion, spring} from "react-motion";

class Anim extends Component {
    render() {

        return <div>
            <Motion defaultStyle={{interpolated: 0}}
                    style={{interpolated: spring(40, {stiffness: 79, damping: 16})}}>
                {({interpolated}) =>
                    <ChatBubble message={"hello " + interpolated}/>
                }
            </Motion>
        </div>;
    }
}

export default Anim;