import React, {useContext} from 'react';
import {ThemeContext} from "../contexts/ThemeContext";
import styled from "styled-components";

function VideoName(props) {

    const {theme} = useContext(ThemeContext);

    const Name = styled.div`
        color: ${theme.syntax};
        font-size: 30px;
        text-align: left;
        padding: 20px 0;
        overflow-wrap: break-word;
    `;
    return (
        <Name>{props.children}</Name>
    );
}

export default VideoName;