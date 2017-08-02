import React from 'react';
import { connect } from 'react-redux';
import { toggleLogin } from '../actions/index';
import { Link } from 'react-router-dom'

const Nav = (props) => {
    function renderLogin(){
        if (props.auth){
            return <button onClick={() => props.toggleLogin(false)} className="btn btn-outline-danger">Logout</button>
        }

        return <button onClick={() => props.toggleLogin(true)} className="btn btn-outline-primary">Login</button>
    }

    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/secret" className="nav-link">View Secret Stuff</Link>
            </li>
            <li className="nav-item">
                {renderLogin()}
            </li>
        </ul>
    )
}

function mapStateToProps(state){
    return {
        auth: state.auth.authorized
    }
}

export default connect(mapStateToProps, {toggleLogin})(Nav);