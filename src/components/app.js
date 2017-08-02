import React from 'react';
import { Route } from 'react-router-dom';
import requireAuth from './require_auth';
import Nav from './nav';
import Home from './home';
import Secret from './secret';

const App = () => (
    <div className="container mt-3">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/secret" component={requireAuth(Secret)} />
    </div>
);

export default App;
