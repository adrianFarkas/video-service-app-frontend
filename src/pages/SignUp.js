import React, {useContext} from 'react';
import SignUpForm from "../components/auth/signup/SignUpForm";
import {AuthContainer} from "../styled-components/authStyle";
import SignUpHeader from "../components/auth/signup/SignUpHeader";
import {ThemeContext} from "../contexts/ThemeContext";
import {ThemeProvider} from "styled-components";

function SignUp() {
    const {theme} = useContext(ThemeContext);

    return (
        <ThemeProvider theme={theme}>
            <div>
                <AuthContainer id={"signup-container"}>
                    <SignUpHeader/>
                    <SignUpForm/>
                </AuthContainer>
            </div>
        </ThemeProvider>
    );
}

export default SignUp;