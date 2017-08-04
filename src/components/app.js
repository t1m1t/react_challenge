import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home';


const App = () => (
    <Route>
    <div className="container">
        <Home exact path="/" component={Home} />
    </div>
    </Route>
);

export default App;
