import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

const AuthHeader = styled.div`
    position: relative;
    background-image: url("img/polygonal.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 30px;
    box-sizing: border-box;
    text-align: center;
    width: 40%;
    z-index: 0;
    &:after{
        content: "";
        background-color: ${props => props.theme.authForm};
        opacity: 0.9;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    } 
`;

const LinkButton = styled.div`
    width: 50%;
    color: ${props => props.theme.authHeaderContent};
    padding: 10px;
    margin: 0 auto;
    border: 2px solid ${props => props.theme.authHeaderContent};
    border-radius: 100px;
    transition: all 0.3s ease-in-out 0s;
    :hover {
        transform: translateY(-3px);
        box-shadow: none;
    }
`;

const AuthText = styled.div`
    color: ${props => props.theme.authHeaderContent};
    font-size: 1.5vw ;
`;

const AuthTitle = styled(AuthText)`
    font-size: 3vw;
`;

function BasicAuthHeader({className, title, texts, buttonText, link}) {

    const authTexts = texts.map((text, i) =>
        <AuthText key={i} className={"auth-header-text"}>{text}</AuthText>
    );

    return (
        <AuthHeader id={"auth-header"} className={className}>
            <AuthTitle
                id={"auth-header-title"}
            >
                {title}
            </AuthTitle>
            {authTexts}
            <Link to={link ? link : "/"}>
                <LinkButton className={"auth-link-btn"}>
                    {buttonText}
                </LinkButton>
            </Link>
        </AuthHeader>
    );
}

export default BasicAuthHeader;