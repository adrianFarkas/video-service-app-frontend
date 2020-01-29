import React, {useContext} from 'react';
import styled from "styled-components";
import {ThemeContext} from "../../contexts/ThemeContext";

const LoadingContainer = styled.div`
    display: ${props => !props.open ? "none" : "flex"};
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    background: ${props => props.transparentBackground};
    border-radius: 10px;
    z-index: 5;
    top: 0;
    left: 0;
`;

const Texts = styled.div`
    display: ${props => !props.show && "none"};
    width: 80%;
    text-align: center;
    margin: 30px 0;
    padding: 15px;
    font-size: 20px;
    color: ${props => props.color}
`;

const Svg = styled.svg`
    width: 100%;
    height: 100%;
`;

const Circle = styled.circle`
    stroke: ${props => props.color};
    stroke-width: 6px;
    fill: none;
    stroke-dasharray: 565;
    stroke-dashoffset: calc(565 - 565 * ${props => props.value} / 100);
    stroke-linecap: round;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
`;

const Track = styled(Circle)`
    stroke: ${props => props.color};
    stroke-dasharray: none;
`;

const Percent = styled.div`
    width: 200px;
    height: 200px;
    position: relative;
`;

const Value = styled.div`
    position: absolute;
    color: ${props => props.color};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
`;

function Progress({open, children, value}) {
    const {theme} = useContext(ThemeContext);

    return (
        <LoadingContainer open={open} {...theme}>
            <Percent>
                <Svg xmlns="http://www.w3.org/2000/svg">
                    <Track color={theme.cardBg} cx="50%" cy="50%" r="45%"/>
                    <Circle color={theme.transparentSyntax} value={value} cx="50%" cy="50%" r="45%"/>
                </Svg>
                <Value color={theme.syntax}>
                    {value ? value : 0}%
                </Value>
            </Percent>
            <Texts color={theme.syntax} show={children}>
                {children}
            </Texts>
        </LoadingContainer>
    );
}

export default Progress;