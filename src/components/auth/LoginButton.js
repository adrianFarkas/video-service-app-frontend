import React from 'react';
import Button from "@material-ui/core/Button";
import {colors} from "../../theme";

function LoginButton({style}) {

    const loginBtn = {
        border: `1px solid ${colors.lightGrey3}`,
        fontWeight: "bold",
        width: "100%",
        height: "40px",
        color: colors.claret,
        backgroundColor: colors.white,
    };

    const btnStyle = style ? style : loginBtn;

    return <Button style={btnStyle}>Login</Button>;
}

export default LoginButton;