import React, {useCallback, useContext, useEffect, useState} from 'react';
import styled, {ThemeProvider} from "styled-components";
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import {ThemeContext} from "../contexts/ThemeContext";
import {Link} from "react-router-dom";
import Loader from "../components/util/Loader";
import {UserContext} from "../contexts/UserContext";

const Container = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
`;

const Card = styled.div`
  width: 600px;
  position: relative;
  min-height: 400px;
  margin: 40px 5px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 2px solid ${props => props.theme.syntax};
  background: ${props => props.theme.cardBg};
  color: ${props => props.theme.syntax};
  border-radius: 20px;
`;

const Icon = styled.div`
  width: 100px;
  height: 100px;
  border: 2px solid ${props => props.theme.syntax};
  background: ${props => `linear-gradient(30deg, ${props.theme.syntax} , ${props.theme.cardBg})`};
  background: ${props => `linear-gradient(30deg, ${props.theme.syntax} , ${props.theme.cardBg})`};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 30px;
  & .MuiSvgIcon-root {
    color: white;
    font-size: 60px;
    filter: drop-shadow(1px 2px 5px black);
  }
`;

const Login = styled(Link)`
  padding: 12px 35px;
  background: ${props => props.theme.syntax};
  color: ${props => props.theme.cardBg};
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  margin: 50px 0 20px;
  :hover {
    color: ${props => props.theme.cardBg};
  }
`;

const Loading = styled(Loader)`
    border-radius: 20px;
    & .MuiCircularProgress-root {
        width: 60px !important;
        height: 60px !important;
    }
`;

function Verify({location, history}) {
    const {theme} = useContext(ThemeContext);
    const {sendVerification} = useContext(UserContext);
    let [seconds, setSeconds] = useState(5);
    let [verified, setVerified] = useState(null);
    const query = new URLSearchParams(location.search);
    const confirmationToken = query.get("token");

    const counter = useCallback(() => {
        let sec = 5;
        const interval = setInterval(() => {
            sec -= 1;
            setSeconds(sec);
            if (sec === 0) clearInterval(interval);
        }, 1000);
    }, []);

    useEffect(() => {
        sendVerification(confirmationToken)
            .then(r => {
                setVerified(r);
                counter();
                setTimeout(() => {
                    history.push("/sign-in")
                }, 5000);
            })
    }, [confirmationToken, counter, history, sendVerification]);

    if (!verified)
        return (
            <Container>
                <Card>
                    <Loading/>
                </Card>
            </Container>
        );

    const content = verified.success ? (
        <div>
            <Icon>
                <DoneIcon/>
            </Icon>
            <h1>Verified!</h1>
            <div>You have successfully verified your account.</div>
        </div>
    ) : (
        <div>
            <Icon>
                <CloseIcon/>
            </Icon>
            <h1>Failed!</h1>
            <div>Token is not valid. Maybe you have already used it or it's expired.</div>
        </div>
    );

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Card>
                    {content}
                    <Login to={"/sign-in"}>Go to Login</Login>
                    <div>or</div>
                    <div>wait {seconds}sec</div>
                </Card>
            </Container>
        </ThemeProvider>
    );
}

export default Verify;