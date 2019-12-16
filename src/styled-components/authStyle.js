import styled from "styled-components";

export const AuthContainer = styled.div`
    position: relative;
    width: 70%;
    min-width: 280px;
    height: 40vw;
    min-height: 380px;
    margin: 120px auto 0;
    display: flex;
`;

export const AuthHeader = styled.div`
    position: relative;
    background-image: url("img/polygonal.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5px;
    width: 40%;
    z-index: -2;
    &:after{
      content: "";
      background-color: rgba(106,0,7,0.86);
      position: absolute;
      border-radius: 5px;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    } 
`;

export const AuthFormContainer = styled.div`
    width: 60%;
    border: 1px solid #6A0007;
    border-radius: 5px;
`;

export const AuthTitle = styled.div`
    color: #fff;
    font-size: 3vw;
    width: 75%;
    margin: 20%;
`;

export const AuthText = styled.div`
    color: #fff;
    font-size: 1.5vw;
    width: 75%;
    margin: 20%;
`;