import React from 'react';
import styled from "styled-components";
import Navbar from "../navigation/Navbar";
import {
    AuthContainer,
    AuthFormContainer,
    AuthHeader,
    AuthText,
    AuthTitle
} from "../../styled-components/authStyle";

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
        margin: 30% auto 20%;
    `;

    return (
        <div>
            <Navbar/>
            <AuthContainer id={"signup-container"}>
                <Header id={"signup-header"}>
                    <Title id={"signup-title"}>Welcome back!</Title>
                    <Text className={"signup-text"}>Sign in before continue.</Text>
                </Header>
                <FormContainer>
                </FormContainer>
            </AuthContainer>
        </div>
    );
}

export default Login;