import React from 'react';
import styled from "styled-components";
import BasicAuthHeader from "../BasicAuthHeader";

function SignUpHeader() {

    const Header = styled(BasicAuthHeader)`
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        &:after {
          border-bottom-right-radius: 0;
          border-top-right-radius: 0;
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