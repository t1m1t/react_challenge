import React from 'react';
import styles from './app.css';
import logo from './imgs/logo.svg';
import Nav from './nav';

const App = (props) => (
    <div className="container">
        <h1>Routing Demo</h1>
        <Nav/>
        {props.children}
    </div>
);

export default App;
