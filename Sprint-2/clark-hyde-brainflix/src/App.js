import Home from './components/Home';
import Nav from './components/Nav';
import './styles/App.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UploadPage from './components/UploadPage';

import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Nav/>
                <Switch>
                <Route path="/" exact component={Home} /> 
                <Route path="/upload" component={UploadPage} /> 
                </Switch>
            </BrowserRouter>
            
        );
    }
}

export default App;