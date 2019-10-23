import React, {useContext} from 'react';
import ReactPlayer from "react-player";
import {RootContext} from "../contexts/RootContext";
import styled from "styled-components";

function Video(props) {

    const {state} = useContext(RootContext);
    const {name, url} = state.selectedVideo;

    const Card = styled.div`
        width: 1100px;
        height: 750px;
        margin: ${props.style ? props.style.margin : "0"};
    `;

    const VideoName = styled.div`
        width: 1100px;
        color: #ffffff;
        font-size: 30px;
        text-align: left;
        padding: 20px 0;
    `;

    return (
        <Card>
            <ReactPlayer
                url={url}
                controls={true}
                width={1100}
                height={620}
            />
            <VideoName>{name}</VideoName>
        </Card>
    );
}

export default Video;
