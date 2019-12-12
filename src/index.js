import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './pages/App';
import Details from './pages/Details';
import {Route, BrowserRouter as Router} from "react-router-dom";
import RootContextProvider from "./contexts/RootContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import CommentContextProvider from "./contexts/CommentContext";
import Player from "./components/Player";
import Test from "./components/Test";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";

const routing = (
    <Router>
        <RootContextProvider>
            <ThemeContextProvider>
                <Route exact path="/" component={App}/>
                <CommentContextProvider>
                    <Route path="/video/:id" component={Details}/>
                </CommentContextProvider>
                <Route path="/sign-up" component={SignUp}/>
                <Route path="/sign-in" component={Login}/>
                <Route path="/player" component={Player}/>
                <Route path="/test" component={Test}/>
            </ThemeContextProvider>
        </RootContextProvider>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

