import React, {useContext} from 'react';
import {AuthContainer} from "../styled-components/authStyle";
import LoginForm from "../components/auth/login/LoginForm";
import LoginHeader from "../components/auth/login/LoginHeader";
import {ThemeProvider} from "styled-components";
import {ThemeContext} from "../contexts/ThemeContext";

function Login(props) {
    const {theme} = useContext(ThemeContext);

    return (
        <ThemeProvider theme={theme}>
            <div>
                <AuthContainer id={"login-container"}>
                    <LoginHeader/>
                    <LoginForm {...props}/>
                </AuthContainer>
            </div>
        </ThemeProvider>
    );
}

export default Login;