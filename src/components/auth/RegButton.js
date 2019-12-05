import React from 'react';
import Button from "@material-ui/core/Button";
import {colors} from "../../theme";
import styled from "styled-components";

function RegButton({style}) {

    const StyledButton = styled(Button)`
        @media (min-width: 1024px){
          :hover {
             transform: skewX(-20deg);
          }
        }
    `;

    const signUpBtn = {
        backgroundColor: colors.claret,
        color: colors.white,
        fontWeight: "bold",
        width: "100%",
        height: "40px",
        transition:' all 0.2s ease-in-out 0s',
    };

    const btnStyle = style ? style : signUpBtn;

    return <StyledButton style={btnStyle}>Sign Up</StyledButton>;
}

export default RegButton;