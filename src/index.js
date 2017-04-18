import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue500, cyan500 } from 'material-ui/styles/colors';

injectTapEventPlugin();

import App from './components/app';


const muiTheme = getMuiTheme({
    palette: {
        accent1Color: cyan500,
        primary1Color: blue500

    },
});

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root')
);
