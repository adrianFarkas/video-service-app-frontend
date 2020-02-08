import React from 'react';
import styled from "styled-components";
import {Link, useParams} from "react-router-dom";

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
    border-left: 5px solid;
    color: ${props => props.selected ? props.theme.cardBg : props.theme.syntax};
    border-color: ${props => props.theme.transparentSyntax};
    background: ${props => props.selected && props.theme.transparentSyntax};
    :hover {
        background: ${props => props.theme.transparentSyntax};
        color: ${props => props.theme.cardBg};
    }
    & .MuiSvgIcon-root {
      margin: 0 20px;
    }
`;


function MenuItem({name, text, to, IconComponent}) {
    const {page} = useParams();

    const selected = name && name === page;
    return (
        <CustomLink to={to}>
            <Item selected={selected} className={"menu-item"}>
                {IconComponent && <IconComponent/>}
                {text}
            </Item>
        </CustomLink>
    );
}

export default MenuItem;