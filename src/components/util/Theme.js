import React, {useContext} from 'react';
import {Img} from "../../styled-components/styled";
import styled from "styled-components";
import {ThemeContext} from "../../contexts/ThemeContext";

const Card = styled.div`
    text-transform: capitalize;
    cursor: ${props => !props.selected && "pointer"};
    & img, div {
        border: ${props => props.selected && `3px solid ${props.theme.syntax}`};
        box-shadow: ${props => props.selected && `0 0 40px ${props.theme.transparentSyntax}`};
    }
`;

const ThemeImg = styled(Img)`
    border-radius: 15px;
    box-sizing: border-box;     
`;

const Name = styled.div`
    font-size: 22px;
    text-align: center;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 6px 10px;
`;

function Theme({className, name, scheme, img}) {
    const {theme, changeTheme} = useContext(ThemeContext);
    const selected = theme === scheme;

    return (
        <Card selected={selected} className={className} onClick={() => changeTheme(name, scheme)}>
            <ThemeImg src={`/img/${img}`} alt={""}/>
            <Name>{name}</Name>
        </Card>
    );
}

export default Theme;