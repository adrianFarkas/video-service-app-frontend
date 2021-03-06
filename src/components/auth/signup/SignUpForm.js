import React, {useContext, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import {makeStyles} from "@material-ui/core";
import {ThemeContext} from "../../../contexts/ThemeContext";
import {AuthButton, AuthFormContainer} from "../../../styled-components/authStyle";
import InputAdornment from "@material-ui/core/InputAdornment";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import {Lock} from "@material-ui/icons";
import {checkEmailExists, isEmailValid, isPasswordValid, isPasswordMatch, errorMessage} from "../../../util/validation";
import {Redirect} from "react-router";
import Loader from "../../util/Loader";
import {UserContext} from "../../../contexts/UserContext";

const CustomLoader = styled(Loader)`
    border-radius: 5px;
    display: ${props => !props.show && "none"};
`;

function SignUpForm() {
    const {theme} = useContext(ThemeContext);
    const {signUp} = useContext(UserContext);
    const [registered, setRegistered] = useState(false);
    const [loading, setLoading] = useState(false);

    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmationPassword: "",
    };
    const validationState = {text: "", invalid: false};

    const [formData, setFormData] = useState(initialState);
    const [emailValidation, setEmailValidation] = useState(validationState);
    const [passwordValidation, setPasswordValidation] = useState(validationState);
    const [confirmPasswordValidation, setConfirmPasswordValidation] = useState(validationState);
    const isEverythingValid = !emailValidation.invalid && !passwordValidation.invalid && !confirmPasswordValidation.invalid;

    const useStyles = makeStyles({
        root: {
            width: "100%",
            "& .MuiInputBase-root": {
                color: theme.authFormContent,
            },
            "& label, label.Mui-focused": {
                color: props => !props && theme.authFormContent,
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: props => !props && theme.authFormContent,
                },
                '&:hover fieldset': {
                    borderColor: props => !props && theme.authFormContent,
                },
                '&.Mui-focused fieldset': {
                    borderColor: props => !props && theme.authFormContent,
                },
            },
            "& .MuiTypography-root": {
                color: props => !props && theme.authFormContent,
            },
        },
        name: {
            width: "48%",
        },
    });

    const classes = useStyles(false);
    const emailClass = useStyles(emailValidation.invalid);
    const passwordClass = useStyles(passwordValidation.invalid);
    const confirmC = useStyles(confirmPasswordValidation.invalid);

    const SignUpButton = styled(AuthButton)`
        margin-top: 30px;
    `;

    const textChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [field]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEverythingValid) {
            let {firstName, lastName, email, password} = formData;
            const userData = {firstName, lastName, email, password};
            setLoading(true);
            signUp(userData)
                .then(res => res.success && setRegistered(true))
        }
    };

    const checkEmailValidation = () => {
        const {email} = formData;
        if (email) {
            if (!isEmailValid(email))
                setEmailValidation({text: errorMessage.emailInvalid, invalid: true});
            else {
                checkEmailExists(email)
                    .then(res => {
                        const exits = res.data;
                        if (exits)
                            setEmailValidation({text: errorMessage.emailExist, invalid: true});
                        else setEmailValidation(validationState);
                    });
            }
            return;
        }
        setEmailValidation(validationState);
    };

    const checkPasswordValidation = () => {
        const {password} = formData;
        if (password && !isPasswordValid(password))
            setPasswordValidation({text: errorMessage.passwordInvalid, invalid: true});
        else setPasswordValidation(validationState);
        checkPasswordsMatch();
    };

    const checkPasswordsMatch = () => {
        const {password, confirmationPassword} = formData;
        if (confirmationPassword && !isPasswordMatch(password, confirmationPassword))
            setConfirmPasswordValidation({text: errorMessage.passwordNotMatch, invalid: true});
        else setConfirmPasswordValidation(validationState);
    };

    const handleEnterSubmit = (e) => {
        if (e.key === "Enter") {
            checkPasswordsMatch();
        }
    };

    if (registered) {
        return <Redirect to={{
            pathname: "/sign-in",
            state: {registered: true}
        }}/>
    }

    return (
        <AuthFormContainer id={"signup-form-cont"} borderColor={theme.authForm}>
            <form id={"signup-form"} onSubmit={handleSubmit}>
                <div id={"signup-name"}>
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
                </div>
                <TextField
                    required
                    error={emailValidation.invalid}
                    helperText={emailValidation.text}
                    variant="outlined"
                    className={emailClass.root}
                    id="email"
                    label="Email"
                    name="email"
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><MailOutlineIcon/></InputAdornment>,
                    }}
                    onChange={textChange}
                    value={formData.email}
                    onBlur={checkEmailValidation}
                />
                <TextField
                    required
                    error={passwordValidation.invalid}
                    helperText={passwordValidation.text}
                    variant="outlined"
                    className={passwordClass.root}
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
                    onBlur={checkPasswordValidation}
                />
                <TextField
                    required
                    error={confirmPasswordValidation.invalid}
                    helperText={confirmPasswordValidation.text}
                    variant="outlined"
                    className={confirmC.root}
                    id="confirmationPassword"
                    label="Confirm Password"
                    name="confirmationPassword"
                    type="password"
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><Lock/></InputAdornment>,
                    }}
                    onChange={textChange}
                    value={formData.confirmationPassword}
                    autoComplete="off"
                    onBlur={checkPasswordsMatch}
                    onKeyPress={handleEnterSubmit}
                />
                <SignUpButton
                    id={"signup-form-btn"}
                    type={"submit"}
                    color={theme.authFormContent}
                >
                    Sign Up
                </SignUpButton>
            </form>
            <CustomLoader show={loading}/>
        </AuthFormContainer>
    );
}

export default SignUpForm;
