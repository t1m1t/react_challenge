import React from 'react';
import { Link } from 'react-router';

export default () => (
    <ul className="nav nav-tabs">
        <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
            <Link to="/blog" className="nav-link">Blog</Link>
        </li>
    </ul>
);