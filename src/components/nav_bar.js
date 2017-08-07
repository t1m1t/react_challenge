import React from 'react';
import { BrowserRouter as Router, Route, NavLink, withRouter } from 'react-router-dom';
import './nav.css';
import Features from './features';
import SignUp from './sign_up';
import { logout } from '../actions';
import { connect } from 'react-redux';


function loginOptions({auth, logout}){
    if(auth){
        return <li className="nav-item"><button onClick={logout} className="btn btn-outline-danger">Logout</button></li>
    }

    return(
        [
        <li key="1" className="nav-item">
            <NavLink to="/sign_up" className="nav-link">Sign-Up</NavLink>
        </li>,
        <li key="2" className="nav-item">
            <NavLink to="/sign_in" className="nav-link">Sign-In</NavLink>
        </li>
        ]
    )
}
    
const NavBar = props => {
    return(
        <ul className="nav my-3">
            <li className="nav-item">
                <NavLink to="/" exact className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/features" className="nav-link">Features</NavLink>
            </li>
            { loginOptions(props) }
        </ul> 
    )
}

function mapStateToProps(state){
    return {
        auth: state.auth.authorized
    }
}

export default withRouter(connect(mapStateToProps, {logout})(NavBar));