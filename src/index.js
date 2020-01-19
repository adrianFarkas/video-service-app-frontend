import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import Watch from './pages/Watch';
import {Route, BrowserRouter as Router} from "react-router-dom";
import RootContextProvider from "./contexts/RootContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import CommentContextProvider from "./contexts/CommentContext";
import Test from "./components/Test";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AuthContextProvider from "./contexts/AuthContext";
import Upload from "./pages/Upload";
import CustomNavbar from "./components/navigation/CustomNavbar";
import './index.css'

const routing = (
    <Router>
        <AuthContextProvider>
            <RootContextProvider>
                <ThemeContextProvider>
                    <CustomNavbar/>
                    <Route exact path="/" component={App}/>
                    <CommentContextProvider>
                        <Route path="/video/:id" component={Watch}/>
                    </CommentContextProvider>
                    <Route path="/sign-up" component={SignUp}/>
                    <Route path="/sign-in" component={Login}/>
                    <Route path="/upload" component={Upload}/>
                    <Route path="/test" component={Test}/>
                </ThemeContextProvider>
            </RootContextProvider>
        </AuthContextProvider>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

