import React from 'react';
import './app.css';
import inputNumber from "./guess";

const App = () => (
    <div>
        <div className="app">
            <h1>Guessing Game</h1>
        </div>
        <inputNumber />
    </div>
);

export default App;
