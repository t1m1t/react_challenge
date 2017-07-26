import React from 'react';
import './app.css';
import logo from './imgs/logo.svg';
import Clock from './clock';

const App = () => (
    <div>
        <div className="app">
            <img src={logo} className="rotate"/>
            <h1>Welcome to React!</h1>
            <Clock />
        </div>
    </div>
);

export default App;
