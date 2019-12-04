import React from 'react';
import Button from "@material-ui/core/Button";
import {colors} from "../../theme";

function RegButton({style}) {

    const signUpBtn = {
        backgroundColor: colors.claret,
        color: colors.white,
        fontWeight: "bold",
        width: "100%",
        height: "40px"
    };

    const btnStyle = style ? style : signUpBtn;

    return <Button style={btnStyle}>Sign Up</Button>;
}

export default RegButton;