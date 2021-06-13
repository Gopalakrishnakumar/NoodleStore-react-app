import React from 'react';
import * as ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import HomeComponent from './components/home/home';
import "./app.scss";

ReactDOM.render(<HomeComponent />, document.getElementById('app'));