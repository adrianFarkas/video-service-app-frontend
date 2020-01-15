import React from 'react';
import {AuthContainer} from "../styled-components/authStyle";
import LoginForm from "../components/auth/login/LoginForm";
import CustomNavbar from "../components/navigation/CustomNavbar";
import LoginHeader from "../components/auth/login/LoginHeader";

function Login() {

    return (
        <div>
            <CustomNavbar/>
            <AuthContainer id={"login-container"}>
                <LoginHeader/>
                <LoginForm/>
            </AuthContainer>
        </div>
    );
}

export default Login;