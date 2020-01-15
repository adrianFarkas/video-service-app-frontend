import React, {useContext, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import {makeStyles} from "@material-ui/core";
import {colors} from "../../../theme";
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
            color: theme.syntax,
            "& label, label.Mui-focused, .MuiInputBase-root": {
                color: theme.syntax,
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: theme.syntax,
                },
                '&:hover fieldset': {
                    borderColor: colors.claret,
                },
                '&.Mui-focused fieldset': {
                    borderColor: theme.syntax,
                },
            },
            "& .MuiTypography-root": {
                color: theme.syntax,
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

    const formStyle = {
        margin: "10%",
        display: "grid",
        gridTemplateRows: "repeat(4, minmax(60px, 6vw))",
        gridGap: "5px",
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
        <AuthFormContainer id={"signup-form"}>
            <form style={formStyle} onSubmit={handleSubmit}>
                <div style={{display: "flex"}}>
                    <TextField
                        required
                        variant="outlined"
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
                        variant="outlined"
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
                    color={theme.syntax}
                    background={theme.background}
                >
                    Sign Up
                </SignUpButton>
            </form>
        </AuthFormContainer>
    );
}

export default SignUpForm;
