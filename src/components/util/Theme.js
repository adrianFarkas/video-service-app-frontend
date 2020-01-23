import React, {useContext} from 'react';
import {Img} from "../../styled-components/styled";
import styled from "styled-components";
import {ThemeContext} from "../../contexts/ThemeContext";

function Theme({className, name, scheme, img}) {
    const {theme, changeTheme} = useContext(ThemeContext);

    const Card = styled.div`
        text-transform: capitalize;
        cursor: ${theme !== scheme && "pointer"};
    `;

    const ThemeImg = styled(Img)`
       border-radius: 15px;
       box-sizing: border-box;
       border: ${theme === scheme && `3px solid ${theme.syntax}`};
       box-shadow: ${theme === scheme && `0 0 40px ${theme.transparentSyntax}`};
    `;

    const Name = styled.div`
      font-size: 22px;
      text-align: center;
      box-sizing: border-box;
      border: ${theme === scheme && `3px solid ${theme.syntax}`};
      border-radius: 10px;
      padding: 6px 10px;
      box-shadow: ${theme === scheme && ` 0 0 40px ${theme.transparentSyntax}`};
   `;

    return (
        <Card className={className} onClick={() => changeTheme(name, scheme)}>
            <ThemeImg src={`/img/${img}`} alt={""}/>
            <Name>{name}</Name>
        </Card>
    );
}

export default Theme;