import React from 'react';
import Navbar from "../navigation/Navbar";
import styled from "styled-components";
import SignUpForm from "./SignUpForm";

function SignUp() {

    const SignUpContainer = styled.div`
        position: relative;
        width: 70%;
        min-width: 280px;
        height: 40vw;
        min-height: 380px;
        margin: 120px auto 0;
        display: flex;
    `;

    const Form = styled.div`
        width: 60%;
        border: 1px solid #6A0007;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
        border-left: 0;
    `;

    const Title = styled.div`
      color: #fff;
      font-size: 3vw;
      margin: 20%;
    `;

    const Header = styled.div`
        background-image: url("img/signup3.png");
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

    return (
        <div>
            <Navbar/>
            <SignUpContainer id={"signup-container"}>
                <Header id={"signup-header"}>
                    <Title id={"signup-title"}>SIGN UP</Title>
                    <Text className={"signup-text"}>It's much better when you have an account.</Text>
                    <Text className={"signup-text"}>Get yourself one.</Text>
                </Header>
                <Form id={"signup-form"}>
                    <SignUpForm/>
                </Form>
            </SignUpContainer>
        </div>
    );
}

export default SignUp;