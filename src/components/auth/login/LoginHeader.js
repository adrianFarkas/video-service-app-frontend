import React from 'react';
import styled from "styled-components";
import BasicAuthHeader from "../BasicAuthHeader";

function LoginHeader() {

    const Header = styled(BasicAuthHeader)`
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        &:after {
          border-bottom-left-radius: 0;
          border-top-left-radius: 0;
        }
    `;


    return (
        <Header
            title={"Sign In"}
            texts={[
                "Don't you have account yet?",
                "Let's create a new account so you can start uploading videos."
            ]}
            link={"/sign-up"}
            buttonText={"Sign Up"}
        />
    );
}

export default LoginHeader;