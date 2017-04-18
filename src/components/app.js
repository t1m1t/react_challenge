import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import styles from './app.css';

const App = () => (
    <div className={styles.app}>
        <Paper className={styles.addForm} zDepth={4}>
            <div>
                <h2>Add To Do Item</h2>
                <Divider />
                <TextField floatingLabelText="Enter An Item Title"/><br/>
                <TextField floatingLabelText="Enter Item Details"/><br/>
                <RaisedButton label="Add Item" primary={true}/>
                <RaisedButton label="Reset Form" secondary={true}/>
            </div>
        </Paper>
    </div>
);

export default App;
