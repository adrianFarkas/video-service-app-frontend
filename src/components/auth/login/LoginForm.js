import React, {useContext, useEffect, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core";
import {ThemeContext} from "../../../contexts/ThemeContext";
import {AuthButton, AuthFormContainer} from "../../../styled-components/authStyle";
import styled from "styled-components";
import {UserContext} from "../../../contexts/UserContext";
import InputAdornment from "@material-ui/core/InputAdornment";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import {Lock} from "@material-ui/icons";
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import PopupAlert from "../../util/PopupAlert";

function LoginForm({location, history}) {
    const {theme} = useContext(ThemeContext);
    const {logIn} = useContext(UserContext);

    const initialState = {
        email: "",
        password: ""
    };

    const [fromRegistration, setFromRegistration] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        checkIfFromRegistered();
    });

    const checkIfFromRegistered = () => {
        let state = location.state;
        if (state && state.registered) {
            setFromRegistration(state.registered);
            history.replace({ pathname: "/sign-in", state: undefined })
        }
    };

    const useStyles = makeStyles({
        root: {
            width: "100%",
            "& .MuiInputBase-root": {
                color: theme.authFormContent,
            },
            "& label, label.Mui-focused": {
                color: !errorMsg && theme.authFormContent,
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: !errorMsg && theme.authFormContent,
                },
                '&:hover fieldset': {
                    borderColor: !errorMsg && theme.authFormContent,
                },
                '&.Mui-focused fieldset': {
                    borderColor: !errorMsg && theme.authFormContent,
                },
            },
        },
        icon: {
            fontSize: "30px",
            marginRight: "10px",
        }
    });
    const classes = useStyles();

    const LoginButton = styled(AuthButton)`
        width: 100%;
    `;

    const Error = styled.div`
        display: ${errorMsg ? "flex" : "none"};
        margin: -95px auto;
        justify-content: center;
        align-items: center;
        color: #d7382a;
        font-weight: bold;
        font-size: 15px;
        text-align: center;
    `;

    const textChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [field]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        logIn(formData)
            .catch(msg => setErrorMsg(msg));
    };

    return (
        <AuthFormContainer id={"login-form-cont"} borderColor={theme.authForm}>

            <form id={"login-form"} onSubmit={handleSubmit}>
                    <TextField
                        required
                        error={errorMsg && true}
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
                    <Error>
                        <HighlightOffOutlinedIcon className={classes.icon}/>
                        <div>{errorMsg}</div>
                    </Error>
                    <TextField
                        required
                        error={errorMsg && true}
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
            <PopupAlert open={fromRegistration} handleClose={() => setFromRegistration(false)} />
        </AuthFormContainer>
    );
}

export default LoginForm;