import React from 'react';
import Button from "@material-ui/core/Button";
import {colors} from "../../theme";
import styled from "styled-components";

function LoginButton({style}) {

    const StyledButton = styled(Button)`
        @media (min-width: 1024px){
          :hover {
             transform: skewX(-20deg);
          }
        }
    `;

    const loginBtn = {
        border: `1px solid ${colors.lightGrey3}`,
        fontWeight: "bold",
        width: "100%",
        height: "40px",
        color: colors.claret,
        backgroundColor: colors.white,
        transition:' all 0.2s ease-in-out 0s',
    };

    const btnStyle = style ? style : loginBtn;

    return <StyledButton style={btnStyle}>Login</StyledButton>;
}

export default LoginButton;