import React, {useContext} from 'react';
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core";
import {colors} from "../../theme";
import {ThemeContext} from "../../contexts/ThemeContext";
import {AuthButton} from "../../styled-components/authStyle";
import styled from "styled-components";

function LoginForm() {
    const {theme} = useContext(ThemeContext);

    const useStyles = makeStyles({
        root: {
            width: "100%",

            color: theme.syntax,
            "& label, label.Mui-focused, .MuiInputBase-root": {
                color: theme.syntax,
            },
            "& .MuiInput-underline:after, .MuiInput-underline:before": {
                borderBottomColor: theme.syntax,
            },
            "& .MuiInput-underline": {
                '&:hover:before': {
                    borderBottomColor: `${colors.claret} !important`,
                },
            },
        },
    });
    const classes = useStyles();

    const formStyle = {
        margin: "15% 10% 10%",
        display: "grid",
        gridTemplateRows: "repeat(2, minmax(100px, 10vw))"
    };

    const LoginButton = styled(AuthButton)`
        width: 100%;
    `;

    return (
        <div>
            <form style={formStyle} >
                    <TextField
                        required
                        className={classes.root}
                        id="email"
                        label="Email"
                        name="email"
                    />
                    <TextField
                        required
                        className={classes.root}
                        id="password"
                        label="Password"
                        name="password"
                        type="password"
                    />
                <LoginButton
                    id={"login-btn"}
                    type={"submit"}
                    color={theme.syntax}
                    background={theme.background}
                >
                    Login
                </LoginButton>
            </form>
        </div>
    );
}

export default LoginForm;