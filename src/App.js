import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import ReactPerfTool from '../node_modules/react-perf-tool';
import Perf from 'react-addons-perf';

// Import styles if they don't get loaded already
import 'react-perf-tool/lib/styles.css';

import HelloWorld from './1-HelloWorld/HelloWorld';
import HelloMessage from './2-HelloMessage/HelloMessage';
import HelloYourName from "./3-HelloYourName/HelloYourName";
import ChatBubble from "./4-ChatBubble/ChatBubble";
import ChatList from "./5-ChatList/ChatList";
import Anim from "./6-Anim/Anim";

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <div className="header">
                            <br/>
                            <hr/>

                            <h1>React Workshop</h1>
                            <div>Exercises:</div>
                            <br/>

                            <div className="menu">
                                <Link to="/hello-world">1- HelloWorld</Link><br/>
                                <Link to="/hello-message">2- HelloMessage</Link><br/>
                                <Link to="/hello-your-name/'your name'">3- HelloYourName</Link><br/>
                                <Link to="/chat-bubble">4- ChatBubble</Link><br/>
                                <Link to="/chat-list">5- ChatList</Link><br/>
                                <Link to="/anim">6- Anim</Link><br/>
                            </div>

                            <br/>
                            <hr/>
                            <br/>
                        </div>

                        <br/>

                        <Route exact path="/" component={HelloWorld}/>
                        <Route exact path="/hello-world" component={HelloWorld}/>
                        <Route exact path="/hello-message" component={HelloMessage}/>
                        <Route path="/hello-your-name/:name"
                               component={(match) => {
                                   console.log("Match ", match);
                                   return <HelloYourName name={match.match.params.name}> </HelloYourName>
                               }
                               }

                        />
                        <Route path="/chat-bubble" component={(match) => <ChatBubble message="hola, como andas?"/>}/>
                        <Route path="/chat-list" component={(match) => <ChatList/>}/>
                        <Route path="/anim" component={(match) => <Anim/>}/>

                        <ReactPerfTool perf={Perf}/>

                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
