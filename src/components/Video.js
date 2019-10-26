import React, {useContext} from 'react';
import ReactPlayer from "react-player";
import {RootContext} from "../contexts/RootContext";
import styled from "styled-components";
import {dark, light} from "../theme";

function Video(props) {

    const {state} = useContext(RootContext);
    const {isLightTheme} = state;
    const theme = isLightTheme ? light : dark;
    const {name, url} = state.selectedVideo;

    const Card = styled.div`
        height: 750px;
        margin: ${props.style ? props.style.margin : "0"};
    `;

    const VideoName = styled.div`
        width: 1100px;
        color: ${theme.syntax};
        font-size: 30px;
        text-align: left;
        padding: 20px 0;
        overflow-wrap: break-word;
    `;

    return (
        <Card>
            <ReactPlayer
                url={url}
                controls={true}
                width={"100%"}
                height={620}
            />
            <VideoName>{name}</VideoName>
        </Card>
    );
}

export default Video;
