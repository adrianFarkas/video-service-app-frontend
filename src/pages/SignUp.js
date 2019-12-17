import React from 'react';
import SignUpForm from "../components/auth/signup/SignUpForm";
import { AuthContainer } from "../styled-components/authStyle";
import CustomNavbar from "../components/navigation/CustomNavbar";
import SignUpHeader from "../components/auth/signup/SignUpHeader";

function SignUp() {

    return (
        <div>
            <CustomNavbar/>
            <AuthContainer id={"signup-container"}>
                <SignUpHeader/>
                <SignUpForm/>
            </AuthContainer>
        </div>
    );
}

export default SignUp;