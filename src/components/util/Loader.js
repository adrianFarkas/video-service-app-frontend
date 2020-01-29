import React, {useContext} from 'react';
import {CircularProgress} from "@material-ui/core";
import {ThemeContext} from "../../contexts/ThemeContext";
import styled from "styled-components";

const LoadContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.transparentBackground};
    border-radius: ${props => props.radius};
    z-index: 3;
    & .MuiCircularProgress-root {
    color: ${props => props.syntax};
    }
`;

function Loader({radius, className}) {
    const {theme} = useContext(ThemeContext);

    return (
        <LoadContainer className={className} radius={radius} {...theme}>
            <CircularProgress />
        </LoadContainer>
    );
}

export default Loader;