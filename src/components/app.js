import React from 'react';
import './app.css';
import './pick_number';
import './make_guess';
import pick_number from "./pick_number";

const App = () => (
    <div>
        <div className="app">
            <img src={logo} className="rotate"/>
            <h1>Guessing Game</h1>
        </div>
        <pick_number />
    </div>
);

export default App;
