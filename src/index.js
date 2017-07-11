import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

const user = {
    firstName: 'Jim',
    lastName: 'Bob'
};

function greet(user){
    return user.firstName + ' ' + user.lastName;
}

const greeting = <h1>Hello, {greet(user)}</h1>;

ReactDOM.render(
    greeting,
    document.getElementById('root')
);
