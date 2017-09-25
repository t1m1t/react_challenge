import React, { Component } from 'react';
import TransitionGroup from 'reac'
import './app.css';
import StaffSection from './staff_section';
import homer from './imgs/homer_simpson.jpg';
import lisa from './imgs/lisa_simpson.jpg';
import abe from './imgs/abe_simpson.jpg';
import artie from './imgs/arty.jpg';
import ralph from './imgs/ralph.jpg';
import patty from './imgs/patty.jpg';



class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            paneOne: {
                profile_img: <img className="new_prof_pic" src={homer}/>,
                name: 'Homer Simpson',
                description: 'Homer is from the city of Springfield.'
            },
            paneTwo: {
                profile_img: <img className="new_prof_pic" src={lisa}/>,
                name: 'Lisa Simpson',
                description: 'Lisa is from the city of Springfield.'
            },
            paneThree: {
                profile_img: <img className="new_prof_pic" src={abe}/>,
                name: 'Abe Simpson',
                description: 'Abe is from the city of Springfield.'
            }
        }

        this.image_clicked = this.image_clicked.bind(this);
    }

    image_clicked(source){
        if (source == homer){
            this.setState({
                paneOne: {
                    profile_img: <img className="new_prof_pic" src={homer}/>,
                    name: 'Homer Simpson',
                    description: 'Homer is from the city of Springfield.'
                },
                paneTwo:{
                    profile_img: <span>{this.state.paneOne.profile_img}</span>,
                    name: <span>{this.state.paneOne.name}</span>,
                    description: <span>{this.state.paneOne.description}</span>
                },
                    paneThree:{
                    profile_img: <span>{this.state.paneTwo.profile_img}</span>,
                    name: <span>{this.state.paneTwo.name}</span>,
                    description: <span>{this.state.paneTwo.description}</span>
                }
            });
        } else if (source == lisa){
            this.setState({
                paneOne: {
                    profile_img: <img className="new_prof_pic" src={lisa}/>,
                    name: 'Lisa Simpson',
                    description: 'Lisa is from the city of Springfield.'
                },
                paneTwo:{
                    profile_img: <span>{this.state.paneOne.profile_img}</span>,
                    name: <span>{this.state.paneOne.name}</span>,
                    description: <span>{this.state.paneOne.description}</span>
                },
                paneThree:{
                    profile_img: <span>{this.state.paneTwo.profile_img}</span>,
                    name: <span>{this.state.paneTwo.name}</span>,
                    description: <span>{this.state.paneTwo.description}</span>
                }
            });
        } else if (source == abe){
            this.setState({
                paneOne: {
                    profile_img: [<img className="new_prof_pic" src={abe}/>],
                    name: ['Abe Simpson'],
                    description: ['Abe is from the city of Springfield.']
                },
                paneTwo:{
                    profile_img: <span>{this.state.paneOne.profile_img}</span>,
                    name: <span>{this.state.paneOne.name}</span>,
                    description: <span>{this.state.paneOne.description}</span>
                },
                paneThree:{
                    profile_img: <span>{this.state.paneTwo.profile_img}</span>,
                    name: <span>{this.state.paneTwo.name}</span>,
                    description: <span>{this.state.paneTwo.description}</span>
                }
            });
        } else if (source == artie){
            this.setState({
                paneOne: {
                    profile_img: <img className="new_prof_pic" src={artie}/>,
                    name: 'Artie Ziff',
                    description: 'Artie is from the city of Springfield.'
                },
                paneTwo:{
                    profile_img: <span>{this.state.paneOne.profile_img}</span>,
                    name: <span>{this.state.paneOne.name}</span>,
                    description: <span>{this.state.paneOne.description}</span>
                },
                paneThree:{
                    profile_img: <span>{this.state.paneTwo.profile_img}</span>,
                    name: <span>{this.state.paneTwo.name}</span>,
                    description: <span>{this.state.paneTwo.description}</span>
                }
            });
        } else if (source == ralph){
            this.setState({
                paneOne: {
                    profile_img: <img className="new_prof_pic" src={ralph}/>,
                    name: 'Ralph Wiggum',
                    description: 'Ralph is from the city of Springfield.'
                },
                paneTwo:{
                    profile_img: <span>{this.state.paneOne.profile_img}</span>,
                    name: <span>{this.state.paneOne.name}</span>,
                    description: <span>{this.state.paneOne.description}</span>
                },
                paneThree:{
                    profile_img: <span>{this.state.paneTwo.profile_img}</span>,
                    name: <span>{this.state.paneTwo.name}</span>,
                    description: <span>{this.state.paneTwo.description}</span>
            }
        });
        }else if (source == patty){
            this.setState({
                paneOne: {
                    profile_img: <img className="new_prof_pic" src={patty}/>,
                    name: 'Patty Bouvier',
                    description: 'Patty is from the city of Springfield.'
                },
                paneTwo:{
                    profile_img: <span>{this.state.paneOne.profile_img}</span>,
                    name: <span>{this.state.paneOne.name}</span>,
                    description: <span>{this.state.paneOne.description}</span>
                },
                paneThree:{
                    profile_img: <span>{this.state.paneTwo.profile_img}</span>,
                    name: <span>{this.state.paneTwo.name}</span>,
                    description: <span>{this.state.paneTwo.description}</span>
                }
            });
        }
    }

    render(){
        return(
            <div className="main_section">
                <h1 className="about_us_title">About Us</h1>
                <div className="top_pane_area">

                    <div className="panes">
                        <div>
                            {this.state.paneOne.profile_img}
                        </div>
                        <div className="person_info">
                            <h4>{this.state.paneOne.name}</h4>
                            <h4>{this.state.paneOne.description}</h4>
                        </div>
                    </div>
                    <div className="panes">
                        <div>
                            {this.state.paneTwo.profile_img}
                        </div>
                        <div className="person_info">
                            <h4>{this.state.paneTwo.name}</h4>
                            <h4>{this.state.paneTwo.description}</h4>
                        </div>
                    </div>
                    <div className="panes">
                        <div>
                            {this.state.paneThree.profile_img}
                        </div>
                        <div className="person_info">
                            <h4>{this.state.paneThree.name}</h4>
                            <h4>{this.state.paneThree.description}</h4>
                        </div>
                    </div>
                </div>
                <div className="bottom_staff_area">
                    <StaffSection image_clicked={this.image_clicked}/>
                </div>
            </div>
        )
    }
};


export default App;