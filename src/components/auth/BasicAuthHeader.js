import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {ThemeContext} from "../../contexts/ThemeContext";
import styled from "styled-components";

function BasicAuthHeader({className, title, texts, buttonText, link}) {
    const {theme} = useContext(ThemeContext);

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
            background-color: ${theme.authForm};
            opacity: 0.87;
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
        color: ${theme.authHeaderContent};
        padding: 10px;
        margin: 0 auto;
        border: 2px solid ${theme.authHeaderContent};
        border-radius: 100px;
        box-shadow: 0 36px 34px -15px ${theme.authButtonHover};
        transition: all 0.3s ease-in-out 0s;
        :hover {
            transform: translateY(-3px);
            background-color: ${theme.authButtonHover};
            box-shadow: none;
        }
    `;

    const AuthText = styled.div`
        color: ${theme.authHeaderContent};
        font-size: 1.5vw ;
    `;

    const AuthTitle = styled(AuthText)`
        font-size: 3vw;
    `;

    const authTexts = texts.map((text, i) =>
        <AuthText key={i} className={"auth-header-text"}>{text}</AuthText>
    );

    return (
        <AuthHeader id={"auth-header"} className={className}>
            <AuthTitle
                id={"auth-header-title"}
                color={theme.authHeaderContent}
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