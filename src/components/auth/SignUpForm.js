import React, {useContext, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {makeStyles} from "@material-ui/core";
import {colors} from "../../theme";
import {ThemeContext} from "../../contexts/ThemeContext";
import axios from "axios";

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

    const SignUpBtn = styled.button`
        position: relative;
        width: 40%;
        min-width: 150px;
        padding: 5px;
        color: ${theme.syntax};
        text-align: center;
        border-radius: 100px;
        background: ${theme.background};
        border: 1px solid transparent;
        transition: all 0.3s ease-in-out 0s;
        &:after{
            position: absolute;
            top: -4px; bottom: -4px;
            left: -4px; right: -4px;
            background: linear-gradient(20deg, #fff 0%, #e2000d 50%, #6A0007 100%);
            content: '';
            z-index: -1;
            border-radius: 100px;
        }
        &:hover {
            background: rgba(0,0,0,0.61);
            color: #fff;
        }      
    `;

    const PlaceHolder = styled.div`
        width: 25%;
    `;

    const AuthButtons = styled.div`
        display: flex;
        margin-top: 30px;
     `;

    const LoginLink = styled.div`
        padding: 5px;
        margin-left: 30px;
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
        <div>
            <form style={formStyle} onSubmit={handleSubmit}>
                <div style={{display:"flex"}}>
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
                <AuthButtons>
                    <SignUpBtn id={"signup-btn"} type={"submit"}>Sign Up</SignUpBtn>
                    <LoginLink>or <Link to={"/sign-in"}>Login</Link></LoginLink>
                </AuthButtons>
            </form>
        </div>
    );
}

export default SignUpForm;
