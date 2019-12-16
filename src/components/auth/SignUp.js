import React from 'react';
import Navbar from "../navigation/Navbar";
import styled from "styled-components";
import SignUpForm from "./SignUpForm";
import {
    AuthContainer,
    AuthFormContainer,
    AuthHeader,
    AuthText,
    AuthTitle
} from "../../styled-components/authStyle";

function SignUp() {

    const FormContainer = styled(AuthFormContainer)`
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        border-left: 0;
    `;

    const Header = styled(AuthHeader)`
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        &:after {
          border-bottom-right-radius: 0;
          border-top-right-radius: 0;
        }
    `;

    return (
        <div>
            <Navbar/>
            <AuthContainer id={"signup-container"}>
                <Header id={"signup-header"}>
                    <AuthTitle id={"signup-title"}>SIGN UP</AuthTitle>
                    <AuthText className={"signup-text"}>It's much better when you have an account.</AuthText>
                    <AuthText className={"signup-text"}>Get yourself one.</AuthText>
                </Header>
                <FormContainer id={"signup-form"}>
                    <SignUpForm/>
                </FormContainer>
            </AuthContainer>
        </div>
    );
}

export default SignUp;