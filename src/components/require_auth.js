import React, {Component} from 'react';
import {connect} from 'react-redux';

export default function require_auth(ComposedComponent){
    class Auth extends Component {
        componentWillMount(){
            if(!this.props.auth){
                this.props.history.push('/');
            }
        }

        componentWillReceiveProps(nextProps){
            if(!nextProps.auth){
                this.props.history.push('/');
            }
        }

        render(){
            return <ComposedComponent {...this.props}/>
        }
    }

    function mapStateToProps(state){
        return {
            auth: state.auth.authorized
        }
    }

    return connect(mapStateToProps)(Auth);
}