import React, {useContext} from 'react';
import {ThemeContext} from "../contexts/ThemeContext";
import styled from "styled-components";

function VideoName(props) {

    const {theme} = useContext(ThemeContext);

    const Name = styled.div`
        color: ${theme.syntax};
        font-size: 3vh;
        text-align: left;
        overflow-wrap: break-word;
        margin: 10px 0 10px 3px;
    `;
    return (
        <Name>{props.children}</Name>
    );
}

export default VideoName;