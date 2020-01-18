import React from 'react';
import styled from "styled-components";
import BasicAuthHeader from "../BasicAuthHeader";

function LoginHeader() {

    const Header = styled(BasicAuthHeader)`
        border-radius: 0 5px 5px 0 !important;
        &:after {
          border-radius: 0 5px 5px 0 !important;
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