import React, {useContext} from 'react';
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core";
import Navbar from "../navigation/Navbar";
import styled from "styled-components";
import {ThemeContext} from "../../contexts/ThemeContext";
import {colors} from "../../theme";
import {Link} from "react-router-dom";

function SignUp() {
    const {theme} = useContext(ThemeContext);

    const useStyles = makeStyles({
        root: {
            width: "100%",
            color: theme.syntax,
            // margin: "2vw auto",
            "& label, label.Mui-focused, .MuiInputBase-root": {
                color: theme.syntax,
            },
            "& .MuiInput-underline:after, .MuiInput-underline:before": {
                borderBottomColor: theme.syntax,
            },
            "& .MuiInput-underline": {
                '&:hover:not($disabled):not($focused):not($error):before': {
                    borderBottomColor: `${colors.claret} !important`,
                },
            },
        },
    });
    const classes = useStyles();

    const SignUpContainer = styled.div`
        position: relative;
        width: 70%;
        min-width: 280px;
        height: 40vw;
        margin: 40px auto;
        display: flex;
    `;

    const SignUpForm = styled.div`
        width: 60%;
        border: 1px solid #6A0007;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
        border-left: 0;
    `;

    const CustomForm = styled.form`
        margin: 10%;
        display: grid;
        grid-template-rows: repeat(4, 6vw);
    `;

    const Title = styled.div`
      color: #fff;
      font-size: 3vw;
      margin: 20%;
    `;

    const Header = styled.div`
        background-image: url("img/signup.png");
        background-repeat: no-repeat;
        background-size: cover;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
        width: 40%;
    `;

    const Text = styled.div`
        color: #fff;
        font-size: 1.5vw;
        width: 70%;
        margin: 20% auto 20% 20%;
    `;

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

    const AuthButtons = styled.div`
        display: flex;
        margin-top: 30px;
     `;

    const LoginLink = styled.div`
        padding: 5px;
        margin-left: 30px;
    `

    return (
        <div>
            <Navbar/>
            <SignUpContainer id={"signup-container"}>
                <Header id={"signup-header"}>
                    <Title id={"signup-title"}>SIGN UP</Title>
                    <Text className={"signup-text"}>It's much better when you have an account.</Text>
                    <Text className={"signup-text"}>Get yourself one.</Text>
                </Header>
                <SignUpForm id={"signup-form"}>
                    <CustomForm>
                        <TextField className={classes.root} id="username" label="Username" error={false}/>
                        <TextField className={classes.root} id="email" label="Email" error={false}/>
                        <TextField className={classes.root} id="password" label="Password" error={false}/>
                        <TextField className={classes.root} id="password2" label="Verify Password" error={false}/>
                        <AuthButtons>
                            <SignUpBtn id={"signup-btn"} type={"submit"}>Sign Up</SignUpBtn>
                            <LoginLink>or <Link to={"/sign-in"}>Login</Link></LoginLink>
                        </AuthButtons>
                    </CustomForm>
                </SignUpForm>
            </SignUpContainer>

        </div>
    );
}

export default SignUp;