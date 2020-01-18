import React, {useContext, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import {makeStyles} from "@material-ui/core";
import {ThemeContext} from "../../../contexts/ThemeContext";
import axios from "axios";
import {AuthButton, AuthFormContainer} from "../../../styled-components/authStyle";
import InputAdornment from "@material-ui/core/InputAdornment";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import {Lock} from "@material-ui/icons";

function SignUpForm() {
    const {theme} = useContext(ThemeContext);
    const url = "/auth/sign-up";

    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmationPassword: "",
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
            "& .MuiTypography-root": {
                color: theme.authFormContent,
            },
        },
        name: {
            width: "48%",
        }
    });
    const classes = useStyles();

    const SignUpButton = styled(AuthButton)`
        margin-top: 30px;
    `;

    const NameCont = styled.div`
        display: flex;
        justify-content: space-between;

    `;

    const textChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [field]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let {firstName, lastName, email, password} = formData;
        const userData = {firstName, lastName, email, password};
        axios.post(url, userData)
            .then(res => console.log(res.data))
    };

    return (
        <AuthFormContainer id={"signup-form-cont"} borderColor={theme.authForm}>
            <form id={"signup-form"} onSubmit={handleSubmit}>
                <NameCont>
                    <TextField
                        required
                        variant="outlined"
                        className={`${classes.root} ${classes.name}`}
                        id="first-name"
                        label="First name"
                        name="firstName"
                        onChange={textChange}
                        value={formData.firstName}
                    />
                    <TextField
                        required
                        variant="outlined"
                        className={`${classes.root} ${classes.name}`}
                        id="last-name"
                        label="Last name"
                        name="lastName"
                        onChange={textChange}
                        value={formData.lastName}
                    />
                </NameCont>
                <TextField
                    required
                    variant="outlined"
                    className={classes.root}
                    id="email"
                    label="Email"
                    error={false}
                    name="email"
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><MailOutlineIcon/></InputAdornment>,
                    }}
                    onChange={textChange}
                    value={formData.email}
                />
                <TextField
                    required
                    variant="outlined"
                    className={classes.root}
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><Lock/></InputAdornment>,
                    }}
                    onChange={textChange}
                    value={formData.password}
                    autoComplete="off"
                />
                <TextField
                    required
                    variant="outlined"
                    className={classes.root}
                    id="confirmationPassword"
                    label="Confirm Password"
                    error={false}
                    name="confirmationPassword"
                    type="password"
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><Lock/></InputAdornment>,
                    }}
                    onChange={textChange}
                    value={formData.confirmationPassword}
                    autoComplete="off"
                />
                <SignUpButton
                    id={"signup-form-btn"}
                    type={"submit"}
                    color={theme.authFormContent}
                >
                    Sign Up
                </SignUpButton>
            </form>
        </AuthFormContainer>
    );
}

export default SignUpForm;
