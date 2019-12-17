import React, {useContext, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import {makeStyles} from "@material-ui/core";
import {colors} from "../../../theme";
import {ThemeContext} from "../../../contexts/ThemeContext";
import axios from "axios";
import {AuthButton, AuthFormContainer} from "../../../styled-components/authStyle";

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

    const PlaceHolder = styled.div`
        width: 25%;
    `;

    const SignUpButton = styled(AuthButton)`
        margin-top: 30px;
    `;

    const FormContainer = styled(AuthFormContainer)`
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        border-left: 0;
    `;

    const formStyle = {
        margin: "10%",
        display: "grid",
        gridTemplateRows: "repeat(4, minmax(60px, 6vw))"
    };

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
        <FormContainer id={"signup-form"}>
            <form style={formStyle} onSubmit={handleSubmit}>
                <div style={{display: "flex"}}>
                    <TextField
                        required
                        className={classes.root}
                        id="first-name"
                        label="First name"
                        name="firstName"
                        onChange={textChange}
                        value={formData.firstName}
                    />
                    <PlaceHolder/>
                    <TextField
                        required
                        className={classes.root}
                        id="last-name"
                        label="Last name"
                        name="lastName"
                        onChange={textChange}
                        value={formData.lastName}
                    />
                </div>
                <TextField
                    required
                    className={classes.root}
                    id="email"
                    label="Email"
                    error={false}
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
                <TextField
                    required
                    className={classes.root}
                    id="confirmationPassword"
                    label="Confirm Password"
                    error={false}
                    name="confirmationPassword"
                    type="password"
                    onChange={textChange}
                    value={formData.confirmationPassword}
                />
                <SignUpButton
                    id={"signup-btn"}
                    type={"submit"}
                    color={theme.syntax}
                    background={theme.background}
                >
                    Sign Up
                </SignUpButton>
            </form>
        </FormContainer>
    );
}

export default SignUpForm;