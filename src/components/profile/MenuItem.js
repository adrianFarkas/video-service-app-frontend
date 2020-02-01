import React, {useContext} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {ThemeContext} from "../../contexts/ThemeContext";

const CustomLink = styled(Link)`
  display: flex;
  margin: 10px 0;
  @media (max-width: 768px) {
    flex: 1 0 180px;
    margin: 0 8px 0 0;
  }
`;

const Item = styled.div`
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    padding: 15px;
    position: relative;
    cursor: pointer;
    transition: all .3s ease-in-out;
    color: ${props => props.syntax};
    border-left: 5px solid;
    border-color: ${props => props.transparentSyntax};
    :hover {
        background: ${props => props.transparentSyntax};
        color: ${props => props.cardBg};
    }
    & .MuiSvgIcon-root {
      margin: 0 20px;
    }
`;


function MenuItem({text, to, IconComponent}) {
    const {theme} = useContext(ThemeContext);

    return (
        <CustomLink to={to}>
            <Item {...theme} className={"menu-item"}>
                {IconComponent && <IconComponent/>}
                {text}
            </Item>
        </CustomLink>
    );
}

export default MenuItem;