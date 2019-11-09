import React, {memo, useContext} from 'react';
import ReactPlayer from "react-player";
import {RootContext} from "../contexts/RootContext";
import styled from "styled-components";
import VideoName from "./VideoName";

function Video(props) {

    const {state} = useContext(RootContext);
    const {name, url} = state.selectedVideo;

    const Card = styled.div`
        height: 750px;
        margin: 0;
    `;

    return (
        <Card>
            <ReactPlayer
                url={url}
                controls={true}
                width={"100%"}
                height={620}
                playing={true}
            />
            <VideoName>{name}</VideoName>
        </Card>
    );
}

export default Video;
