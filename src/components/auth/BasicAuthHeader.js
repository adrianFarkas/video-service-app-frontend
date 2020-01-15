import React from 'react';
import {AuthHeader, AuthText, AuthTitle, LinkButton} from "../../styled-components/authStyle";
import {Link} from "react-router-dom";

function BasicAuthHeader({className, title, texts, buttonText, link}) {

    const authTexts = texts.map((text, i) => <AuthText key={i} className={"auth-header-text"}>{text}</AuthText>);

    return (
        <AuthHeader id={"auth-header"} className={className}>
            <AuthTitle id={"auth-header-title"}>{title}</AuthTitle>
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