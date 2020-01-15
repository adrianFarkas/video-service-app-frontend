import React from 'react';
import styled from "styled-components";
import {colors} from "../../theme";
import {Link} from "react-router-dom";

function AuthButton({id, text, url, IconComponent, color, background}) {

    const Button = styled.div`
        display: flex;
        justify-content: center;
        border: 2px solid ${colors.claret};
        background-color: ${background ? background : "unset"};
        padding: 6px 0;
        width: 100%;
        font-size: 16px;
        color: ${color ? color : "#fff"};
        border-radius: 10px;
        transition: all 0.2s ease-in-out 0s;
        @media (min-width: 1024px){
          :hover {
              background-color: rgba(106,0,7,0.2);
              color: ${colors.claret};
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