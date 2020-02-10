import React from 'react';
import {AuthContainer} from "../styled-components/authStyle";
import LoginForm from "../components/auth/login/LoginForm";
import LoginHeader from "../components/auth/login/LoginHeader";

function Login(props) {

    return (
        <div>
            <AuthContainer id={"login-container"}>
                <LoginHeader/>
                <LoginForm {...props}/>
            </AuthContainer>
        </div>
    );
}

export default Login;