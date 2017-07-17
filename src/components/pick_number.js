import React, {Component} from 'react';

class pick_number extends Component {
    constructor(props){
        super(props);

        this.state = {
            form: {
                guess: ''
            }
        }
    }

    handleChange(event){
        const { guess } = event.target;

        const { form } = this.state;
        form[name] = value;

        this.setState( { form: {...form} } );
    }

    handleFormSubmit(){
        event.preventDefault();
        console.log("called handleFormSubmit", this.state.form);

        const newState = {
            form: {
                guess: ''
            }
        };
        this.setState(newState);
    }

    render(){
        const { guess } = this.state.form;

        return (
            <form onSubmit={(event) => { this.handleFormSubmit(event) } }>
                <div>
                    <label>Enter Guess </label>
                    <input type="guess" value={guess} name="guess" onChange={ (event) => this.handleChange(event) } />
                </div>
                <button>Guess</button>
            </form>
        )
    }
}

export default pick_number;