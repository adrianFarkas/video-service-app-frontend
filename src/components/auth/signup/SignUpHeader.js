import React from 'react';
import styled from "styled-components";
import BasicAuthHeader from "../BasicAuthHeader";

function SignUpHeader() {

    const Header = styled(BasicAuthHeader)`
        border-radius: 5px 0 0 5px !important;
        &:after {
          border-radius: 5px 0 0 5px !important;
        }
    `;

    return (
        <Header
            title={"Sign Up"}
            texts={[
                "Already Signed up?",
                "Log in to your account so you can use more features."
            ]}
            link={"/sign-in"}
            buttonText={"Sign In"}
        />
    );
}

export default SignUpHeader;