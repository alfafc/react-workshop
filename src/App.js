import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import HelloWorld from './1-HelloWorld/helloWorld';
import HelloYou from './2-HelloYou/helloYou';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Link to="/">HelloWorld</Link><br/>
                        <Link to="/HelloYou/Pepe">HelloYou</Link><br/>
                        <Link to="/about">About</Link>

                        <hr/>

                        <Route exact path="/" component={HelloWorld}/>
                        <Route exact path="/HelloYou/:name"
                               component={(match) => <HelloYou name={match.match.params.name}> </HelloYou>}
                        />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
