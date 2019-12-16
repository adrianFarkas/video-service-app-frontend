import React from 'react';
import styled from "styled-components";
import Navbar from "../navigation/Navbar";
import {
    AuthContainer,
    AuthFormContainer,
    AuthHeader,
    AuthText,
    AuthTitle,
    LinkButton
} from "../../styled-components/authStyle";
import LoginForm from "./LoginForm";
import {Link} from "react-router-dom";

function Login() {

    const FormContainer = styled(AuthFormContainer)`
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        border-right: 0;
        order: -1;
    `;

    const Header = styled(AuthHeader)`
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        &:after {
          border-bottom-left-radius: 0;
          border-top-left-radius: 0;
        }
    `;

    const Title = styled(AuthTitle)`
      margin: 20% auto;
    `;

    const Text = styled(AuthText)`
        margin: 15% auto;
    `;

    return (
        <div>
            <Navbar/>
            <AuthContainer id={"login-container"}>
                <Header id={"login-header"}>
                    <Title id={"login-title"}>Sign In</Title>
                    <Text className={"login-text"}>Don't you have account yet?</Text>
                    <Text className={"login-text"}>Let's create a new account so you can start uploading videos.</Text>
                    <Link to={"/sign-up"}>
                        <LinkButton className={"auth-link-btn"}>
                            Sign Up
                        </LinkButton>
                    </Link>
                </Header>
                <FormContainer id={"login-form"}>
                    <LoginForm/>
                </FormContainer>
            </AuthContainer>
        </div>
    );
}

export default Login;