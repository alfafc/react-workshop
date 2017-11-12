import React, {Component} from 'react';
import ChatBubble from "../4-ChatBubble/ChatBubble";
import {Motion, spring} from "react-motion";

class Anim extends Component {
    render() {

        return <div>
            <Motion defaultStyle={{interpolated: 0}}
                    style={{
                        interpolated:
                            spring(400, {stiffness: 40, damping: 10})
                    }}>
                {
                    ({interpolated}) =>
                        <div style={{marginLeft: interpolated}}>
                            <ChatBubble message={"hello " + interpolated}/>
                        </div>
                }
            </Motion>
        </div>;
    }
}

export default Anim;