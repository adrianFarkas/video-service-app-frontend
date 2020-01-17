import styled from "styled-components";

export const AuthContainer = styled.div`
    position: relative;
    width: 70%;
    min-width: 280px;
    height: 40vw;
    min-height: 380px;
    margin: 100px auto 0;
    display: flex;
`;

export const AuthHeader = styled.div`
    position: relative;
    background-image: url("img/polygonal.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5px;
    text-align: center;
    width: 40%;
    z-index: 0;
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
    margin: 20% auto;
`;

export const AuthText = styled.div`
    color: #fff;
    font-size: 1.5vw ;
    margin: 15% auto;
`;

export const AuthButton = styled.button`
    position: relative;
    width: 40%;
    min-width: 150px;
    padding: 5px;
    color: ${props => props.color};
    text-align: center;
    border-radius: 100px;
    background: ${props => props.background};
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

export const LinkButton = styled.div`
    width: 50%;
    color: #fff;
    padding: 10px;
    margin: 0 auto;
    border: 2px solid white;
    border-radius: 100px;
    box-shadow: 0 36px 34px -20px rgba(255,255,255,0.5);
    transition: all 0.3s ease-in-out 0s;
    :hover {
        transform: translateY(-3px);
        background-color: rgba(255,255,255,0.1);
        box-shadow: unset;
    }
`;