import React, {useContext, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core";
import {ThemeContext} from "../../../contexts/ThemeContext";
import {AuthButton, AuthFormContainer} from "../../../styled-components/authStyle";
import styled from "styled-components";
import {AuthContext} from "../../../contexts/AuthContext";
import InputAdornment from "@material-ui/core/InputAdornment";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import {Lock} from "@material-ui/icons";

function LoginForm() {
    const {theme} = useContext(ThemeContext);
    const {logIn} = useContext(AuthContext);

    const initialState = {
        email: "",
        password: ""
    };

    const [formData, setFormData] = useState(initialState);

    const useStyles = makeStyles({
        root: {
            width: "100%",
            color: theme.authFormContent,
            "& label, label.Mui-focused, .MuiInputBase-root": {
                color: theme.authFormContent,
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: theme.authFormContent,
                },
                '&:hover fieldset': {
                    borderColor: theme.authFormContent,
                },
                '&.Mui-focused fieldset': {
                    borderColor: theme.authFormContent,
                },
            },
        },
    });
    const classes = useStyles();

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
        logIn(formData);
    };

    return (
        <AuthFormContainer id={"login-form-cont"} borderColor={theme.authForm}>
            <form id={"login-form"} onSubmit={handleSubmit}>
                    <TextField
                        required
                        variant="outlined"
                        className={classes.root}
                        id="email"
                        label="Email"
                        name="email"
                        onChange={textChange}
                        value={formData.email}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><MailOutlineIcon/></InputAdornment>,
                        }}
                    />
                    <TextField
                        required
                        variant="outlined"
                        className={classes.root}
                        id="password"
                        label="Password"
                        name="password"
                        type="password"
                        onChange={textChange}
                        value={formData.password}
                        autoComplete="off"
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><Lock/></InputAdornment>,
                        }}
                    />
                <LoginButton
                    id={"login-form-btn"}
                    type={"submit"}
                    color={theme.authFormContent}
                >
                    Login
                </LoginButton>
            </form>
        </AuthFormContainer>
    );
}

export default LoginForm;