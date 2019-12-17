import React from 'react';
import Button from "@material-ui/core/Button";
import {colors} from "../../../theme";
import styled from "styled-components";
import {Link} from "react-router-dom";

function LoginButton({style, id}) {

    const CustomLink = styled(Link)`
        transition: all 0.2s ease-in-out 0s;
        width: 100%;
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
        color: colors.claret,
        backgroundColor: colors.white,
    };

    const btnStyle = style ? style : loginBtn;

    return (
        <CustomLink to={"/sign-in"} id={id}>
            <Button style={btnStyle}>
                Login
            </Button>
        </CustomLink>
    );
}

export default LoginButton;