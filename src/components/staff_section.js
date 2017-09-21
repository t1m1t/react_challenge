import React, { Component } from 'react';
import './app.css';
import Homer from './imgs/homer_simpson.jpg';
import Lisa from './imgs/lisa_simpson.jpg';
import Abe from './imgs/abe_simpson.jpg';
import Ned from './imgs/mini_ned.jpg';
import Moe from './imgs/moe.jpg';
import Patty from './imgs/patty.jpg';


class StaffSection extends Component {
    displayInfo(){
        console.log('info displayed');
    }

    render() {
        return(
            <div>
                <div>
                    <img onClick={this.displayInfo} className="prof_pic" src={Homer} />
                    <img onClick={this.displayInfo} className="prof_pic" src={Lisa} />
                    <img onClick={this.displayInfo} className="prof_pic" src={Abe} />
                    <img onClick={this.displayInfo} className="prof_pic" src={Ned} />
                    <img onClick={this.displayInfo} className="prof_pic" src={Moe} />
                    <img onClick={this.displayInfo} className="prof_pic" src={Patty} />
                </div>
            </div>
        )
    }
}

export default StaffSection;