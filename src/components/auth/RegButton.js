import React from 'react';
import Button from "@material-ui/core/Button";
import {colors} from "../../theme";
import styled from "styled-components";
import {Link} from "react-router-dom";

function RegButton({style}) {

    const CustomLink = styled(Link)`
        transition: all 0.2s ease-in-out 0s;
        width: 100%;
        @media (min-width: 1024px){
          :hover {
             transform: scaleX(1.05);
          }
        }
    `;

    const signUpBtn = {
        backgroundColor: colors.claret,
        color: colors.white,
        fontWeight: "bold",
        width: "100%",
        height: "40px",
    };

    const btnStyle = style ? style : signUpBtn;

    return (
        <CustomLink to={"/sign-up"}>
            <Button style={btnStyle}>
                Sign Up
            </Button>
        </CustomLink>
    );
}

export default RegButton;