import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './nav.css';
import Features from './features';
import SignUp from './sign_up';


export default props => (
    <ul className="nav my-3">
        <li className="nav-item">
            <NavLink to="/" exact className="nav-link">Home</NavLink>
        </li>
         <li className="nav-item">
            <NavLink to="/features" className="nav-link">Features</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/sign_up" className="nav-link">Sign-Up</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/sign_in" className="nav-link">Sign-In</NavLink>
        </li>
    </ul> 
)