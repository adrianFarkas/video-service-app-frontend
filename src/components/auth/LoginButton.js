import React from 'react';
import Button from "@material-ui/core/Button";
import {colors} from "../../theme";
import styled from "styled-components";
import {Link} from "react-router-dom";

function LoginButton({style}) {

    const CustomLink = styled(Link)`
        width: 100%;
        transition: all 0.2s ease-in-out 0s;
        @media (min-width: 1024px){
          :hover {
             transform: scaleX(1.05);
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
    };

    const btnStyle = style ? style : loginBtn;

    return (
        <CustomLink to={"/sign-in"}>
            <Button style={btnStyle}>
                Login
            </Button>
        </CustomLink>
    );
}

export default LoginButton;