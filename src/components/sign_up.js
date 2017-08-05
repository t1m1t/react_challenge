import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { signup } from '../actions';
import { connect } from 'react-redux';
import {renderInput} from './helper_functions';


class SignUp extends Component{
    handleSignup(vals){
        console.log('Form values:', vals);
        this.props.signup(vals);
    }

    render(){
        const { handleSubmit, reset, signupError } = this.props;
        return(
            <div>
                <h1>Sign-Up</h1>
                <form onSubmit={handleSubmit(vals => this.handleSignup(vals))}>
                    <Field name="email" label="E-mail" component={renderInput} />
                    <Field name="password" type="password" label="Password" 
                    component={renderInput} />
                    <Field name="password-confirm" type="password" label="Password-Confirm" 
                    component={renderInput} />
                    
                    <p className="text-danger">{signupError}</p>
                    <button className="btn btn-outline-success mr-2">Sign Up!</button>
                    <button type="button" onClick={reset} className="btn btn-outline-danger">Clear Form</button>
                </form>
            </div>
        )
    }
}

function validate(vals){
    const error = {};

    if (!vals.email){
        error.email = "Please enter an e-mail";
    }
    if (!vals.password){
        error.password = "Please enter a password";
    }
    if (vals.password !== vals.confirmPassword){
        error.confirmPassword = "Passwords must match";
    }

    return error;
}

SignUp = reduxForm({
    form: 'signup',
    validate
})(SignUp);

function mapStateToProps(state){
    return{
        signpError: state.auth.error
    }
}

export default connect(mapStateToProps, {signup})(SignUp);