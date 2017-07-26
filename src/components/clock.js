import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tick } from '../actions/index';


class Clock extends Component {
    componentDidMount(){
        setInterval(() => {
            this.props.tick();
        }, 1000);
    }

    render(){
        return (
            <h1> Clock Component </h1>
        )
    }
}

function mapStateToProps(state){
    return {
        time: state.clock.currentTime
    }
}

export default connect(mapStateToProps, {tick})(Clock);