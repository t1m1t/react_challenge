import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMsg } from '../actions';

class Features extends Component {
    componentWillMount(){
        this.props.fetchMsg();
    }
    
    render(){
        const { msg } = this.props;
        return (
            <div>
                <h1>Features</h1>
                <h3>{ msg }</h3>
            </div>
        )
    }
};

function mapStateToProps(state){
    return {
        msg: state.auth.msg
    }
}

export default connect(mapStateToProps, {fetchMsg})(Features);