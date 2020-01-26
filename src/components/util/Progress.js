import React, {useContext} from 'react';
import styled from "styled-components";
import {ThemeContext} from "../../contexts/ThemeContext";

function Progress({open, children, value}) {
    const {theme} = useContext(ThemeContext);

    const LoadingContainer = styled.div`
          display: ${!open ? "none" : "flex"};
          width: 100%;
          height: 100vh;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          position: fixed;
          background: ${theme.transparentBackground};
          border-radius: 10px;
          z-index: 5;
          top: 0;
          left: 0;
    `;

    const Texts = styled.div`
        display: ${!children && "none"};
        width: 80%;
        text-align: center;
        margin: 30px 0;
        padding: 15px;
        font-size: 20px;
        color: ${theme.syntax}
    `;

    const Svg = styled.svg`
        width: 100%;
        height: 100%;
    `;

    const Circle = styled.circle`
        stroke: ${theme.transparentSyntax};
        stroke-width: 6px;
        fill: none;
        stroke-dasharray: 565;
        stroke-dashoffset: calc(565 - 565 * ${value} / 100);
        stroke-linecap: round;
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
    `;

    const Track = styled(Circle)`
        stroke: ${theme.cardBg};
        stroke-dasharray: none;
    `;

    const Percent = styled.div`
         width: 200px;
         height: 200px;
         position: relative;
    `;

    const Value = styled.div`
        position: absolute;
        color: ${theme.syntax};
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
    `;

    return (
        <LoadingContainer>
            <Percent>
                <Svg xmlns="http://www.w3.org/2000/svg">
                    <Track cx="50%" cy="50%" r="45%"/>
                    <Circle cx="50%" cy="50%" r="45%"/>
                </Svg>
                <Value>
                    {value ? value : 0}%
                </Value>
            </Percent>
            <Texts>
                {children}
            </Texts>
        </LoadingContainer>
    );
}

export default Progress;