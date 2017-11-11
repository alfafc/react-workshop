import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import HelloWorld from './1-HelloWorld/HelloWorld';
import HelloYou from './2-HelloMessage/HelloMessage';
import ChatBubble from "./3-ChatBubble/ChatBubble";

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
                                <Link to="/hello-you/Mark">2- HelloYou</Link><br/>
                                <Link to="/chat-bubble">3- ChatBubble</Link>
                            </div>

                            <br/>
                            <hr/>
                            <br/>
                        </div>

                        <br/>

                        <Route exact path="/" component={HelloWorld}/>
                        <Route exact path="/hello-world" component={HelloWorld}/>
                        <Route exact path="/hello-you" component={HelloYou}/>
                        <Route path="/hello-you/:name"
                               component={(match) => <HelloYou name={match.match.params.name}> </HelloYou>}
                        />
                        <Route path="/chat-bubble" component={ChatBubble}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
