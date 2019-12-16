import React from 'react';
import Navbar from "../navigation/Navbar";
import styled from "styled-components";
import SignUpForm from "./SignUpForm";
import {
    AuthContainer,
    AuthFormContainer,
    AuthHeader,
    AuthText,
    AuthTitle,
    LinkButton
} from "../../styled-components/authStyle";
import {Link} from "react-router-dom";

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
                    <AuthTitle id={"signup-title"}>Sign Up</AuthTitle>
                    <AuthText className={"signup-text"}>Already Signed up?</AuthText>
                    <AuthText className={"signup-text"}>Log in to your account so you can use more features.</AuthText>
                        <Link to={"/sign-in"}>
                            <LinkButton className={"auth-link-btn"}>
                                Sign In
                            </LinkButton>
                        </Link>
                </Header>
                <FormContainer id={"signup-form"}>
                    <SignUpForm/>
                </FormContainer>
            </AuthContainer>
        </div>
    );
}

export default SignUp;