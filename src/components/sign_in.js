import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {renderInput} from './helper_functions';
import { connect } from 'react-redux';
import { signin } from '../actions';

class SignIn extends Component {
    handleSignIn(vals){
        console.log("Sign In vals:", vals);
        this.props.signin(vals);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.auth){
            this.props.history.push('/features');
        }
    }

    render(){
        const { handleSubmit, reset, signinError } = this.props;
        return (
            <div>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit(vals => this.handleSignIn(vals))}>
                    <Field name="email" label="E-mail" component={renderInput} />
                    <Field name="password" label="Password" type="password" component={renderInput} />
                    
                    <p className="text-danger">{signinError}</p>
                    <button className="btn btn-outline-success mr-2">Sign In!</button>
                    <button type="button" onClick={reset} className="btn btn-outline-danger">Clear Form</button>
                </form>
            </div>
        )
    }
};

SignIn = reduxForm({
    form: 'signin'
    // validate
})(SignIn);

function mapStateToProps(state){
    return{
        signinError: state.auth.error,
        auth: state.auth.authorized
    }
}

export default connect(mapStateToProps, {signin})(SignIn);