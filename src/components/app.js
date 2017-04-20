import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import styles from './app.css';

class App extends Component {

    submitForm(vals){
        console.log('Form values on submit:', vals);
    }

    renderTextField({input, label}){
        return <TextField {...input} floatingLabelText={label}/>
    }

    renderSlider({input: {onChange, value}, name, defaultValue, min, max}){
        if(!value){
            defaultValue = defaultValue || min;
            onChange(defaultValue);
        }

        return <Slider name={name} onChange={(props, val) => onChange(val, props)} defaultValue={defaultValue} min={min} max={max}/>
    }

    render(){
        const { handleSubmit } = this.props;
        return (
            <div className={styles.app}>
                <Paper className={styles.addForm} zDepth={4}>
                    <div>
                        <h2>Add To Do Item</h2>
                        <Divider />
                        <form>
                            <Field name="title" component={this.renderTextField} label="Enter An Item Title" /><br/>
                            <Field name="details" component={this.renderTextField} label="Enter Item Details" /><br/>
                            <Field name="slider" component={this.renderSlider} defaultValue={5} min={1} max={10} />
                            <RaisedButton onClick={handleSubmit( values => this.submitForm(values))} label="Add Item" primary={true}/>
                            <RaisedButton label="Reset Form" secondary={true}/>
                        </form>
                    </div>
                </Paper>
            </div>
        )
    }
}

App = reduxForm({
    form: 'testForm'
})(App);

export default App;
