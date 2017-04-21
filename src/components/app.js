import React from 'react';
import Dogs from './dogs';
import './css/app.css';
import logo from './imgs/logo.svg';

const App = () => (
    <div>
        <div className="app">
            <img src={logo} className="rotate"/>
            <h1>Welcome to React!</h1>
        </div>
        <Dogs/>
    </div>
);

export default App;
