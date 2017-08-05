import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import NavBar from './nav_bar';
import Features from './features';
import SignUp from './sign_up';
import SignIn from './sign_in';
import authUser from '../hoc/auth_user';


const App = () => (
    <div className="container">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/features" component={ authUser (Features) } />
        <Route path="/sign_up" component={SignUp} />
        <Route path="/sign_in" component={SignIn} />
    </div>
);

export default App;
