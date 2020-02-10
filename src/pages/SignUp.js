import React from 'react';
import SignUpForm from "../components/auth/signup/SignUpForm";
import {AuthContainer} from "../styled-components/authStyle";
import SignUpHeader from "../components/auth/signup/SignUpHeader";

function SignUp() {

    return (
        <div>
            <AuthContainer id={"signup-container"}>
                <SignUpHeader/>
                <SignUpForm/>
            </AuthContainer>
        </div>
    );
}

export default SignUp;