import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import NavBar from './nav_bar';
import Features from './features';


const App = () => (
    <div className="container">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/features" component={Features} />
    </div>
);

export default App;
