import React, {useContext} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {ThemeContext} from "../../contexts/ThemeContext";

function AuthButton({id, text, url, IconComponent}) {
    const {theme} = useContext(ThemeContext);

    const Button = styled.div`
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        border: 2px solid ${theme.syntax};
        padding: 6px 0;
        width: 100%;
        font-size: 16px;
        color: ${theme.syntax};
        border-radius: 10px;
        transition: all 0.4s ease-in-out 0s;
        @media (min-width: 1024px){
          :hover {
              transform: translateY(-2px);
              background-color: ${theme.buttonHover};
          }
        }
        & .MuiSvgIcon-root {
          font-size: 20px;
          margin-right: 10px;
        }
    `;

    const Text = styled.div`
        font-size: 18px;
    `;

    return (
        <Link to={url ? url : "/"} id={id}>
            <Button>
                {IconComponent ? IconComponent : ""}
                <Text>{text}</Text>
            </Button>
        </Link>
    );
}

export default AuthButton;