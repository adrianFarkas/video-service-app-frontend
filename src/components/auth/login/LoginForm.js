import React, {useContext, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core";
import {colors} from "../../../theme";
import {ThemeContext} from "../../../contexts/ThemeContext";
import {AuthButton, AuthFormContainer} from "../../../styled-components/authStyle";
import styled from "styled-components";
import axios from "axios";

function LoginForm() {
    const {theme} = useContext(ThemeContext);
    const url = "/auth/sign-in";

    const initialState = {
        email: "",
        password: ""
    };

    const [formData, setFormData] = useState(initialState);

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

    const textChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [field]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(url, formData)
            .then(res => console.log(res.data))
    };

    return (
        <AuthFormContainer id={"login-form"}>
            <form style={formStyle} onSubmit={handleSubmit}>
                    <TextField
                        required
                        className={classes.root}
                        id="email"
                        label="Email"
                        name="email"
                        onChange={textChange}
                        value={formData.email}
                    />
                    <TextField
                        required
                        className={classes.root}
                        id="password"
                        label="Password"
                        name="password"
                        type="password"
                        onChange={textChange}
                        value={formData.password}
                    />
                <LoginButton
                    id={"login-form-btn"}
                    type={"submit"}
                    color={theme.syntax}
                    background={theme.background}
                >
                    Login
                </LoginButton>
            </form>
        </AuthFormContainer>
    );
}

export default LoginForm;