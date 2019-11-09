import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './pages/App';
import Details from './pages/Details';
import {Route, BrowserRouter as Router} from "react-router-dom";
import RootContextProvider from "./contexts/RootContext";
import ThemeContextProvider from "./contexts/ThemeContext";

const routing = (
    <Router>
        <RootContextProvider>
            <ThemeContextProvider>
                <Route exact path="/" component={App}/>
                <Route path="/video/:id" component={Details}/>
            </ThemeContextProvider>
        </RootContextProvider>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

