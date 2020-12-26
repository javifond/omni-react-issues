import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Home from './components/home/home';
import IssuesLobby from './components/issues-lobby/issues-lobby';

function App() {
    return (
        <Router>
            <AnimatedSwitch
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
            >
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/issues-lobby">
                    <IssuesLobby />
                </Route>
            </AnimatedSwitch>
        </Router>
    );
}

export default App;
