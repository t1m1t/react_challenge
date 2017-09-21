import React, { Component } from 'react';
import './app.css';
import homer from './imgs/homer_simpson.jpg';
import lisa from './imgs/lisa_simpson.jpg';
import abe from './imgs/abe_simpson.jpg';
import artie from './imgs/arty.jpg';
import ralph from './imgs/ralph.jpg';
import patty from './imgs/patty.jpg';


class StaffSection extends Component {
    render() {
        let image_clicked = this.props.image_clicked;

        return(
            <div>
                <div>
                    <img className="prof_pic" src={homer} onClick={() => image_clicked(homer)}/>
                    <img className="prof_pic" src={lisa} onClick={() => image_clicked(lisa)}/>
                    <img className="prof_pic" src={abe} onClick={() => image_clicked(abe)}/>
                    <img className="prof_pic" src={artie} onClick={() => image_clicked(artie)}/>
                    <img className="prof_pic" src={ralph} onClick={() => image_clicked(ralph)}/>
                    <img className="prof_pic" src={patty} onClick={() => image_clicked(patty)}/>
                </div>
            </div>
        )
    }
}

export default StaffSection;