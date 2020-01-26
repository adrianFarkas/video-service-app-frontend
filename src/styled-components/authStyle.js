import styled from "styled-components";

export const AuthContainer = styled.div`
    width: 70%;
    min-width: 280px;
    height: 40vw;
    min-height: 450px;
    margin: 60px auto 0;
    display: flex;
    z-index: 4;
    position: relative;
`;

export const AuthFormContainer = styled.div`
    width: 60%;
    border: 1px solid ${props => props.borderColor};
    box-sizing: border-box;
    border-radius: 5px;
    padding: 30px;
`;

export const AuthButton = styled.button`
    position: relative;
    width: 40%;
    min-width: 150px;
    padding: 8px 0;
    color: ${props => props.color};
    text-align: center;
    border-radius: 100px;
    background: transparent;
    border: 2px solid ${props => props.color};
    cursor: pointer;
    transition: all 0.3s ease-in-out 0s;
    :hover {
        transform: translateY(-3px);
    }
`;