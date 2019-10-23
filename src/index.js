import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './pages/App';
import Details from './pages/Details';
import {Route, BrowserRouter as Router} from "react-router-dom";
import RootContextProvider from "./contexts/RootContext";

const routing = (
    <Router>
        <RootContextProvider>
            <Route exact path="/" component={App}/>
            <Route path="/video/:id" component={Details}/>
        </RootContextProvider>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

