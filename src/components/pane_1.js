import React, { Component } from 'react';
import './app.css';


class PaneOne extends Component {
    constructor (props){
        super(props);
        this.state = {
            profile_pic:'',
            name: '',
            description: ''
        };
    }

    render () {
        return (
            <div className="panes">

            </div>
        )
    }
}

export default PaneOne;