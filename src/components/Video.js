import React, {useContext} from 'react';
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
        @media (max-width: 1200px) {
           height: 550px;
        }
        @media (max-width: 1024px) {
           height: 450px;
        }
    `;

    const Vid = styled.div`
        width: 100%;
        height: 80%;
        @media (max-width: 480px) {
           height: 300px;
        }
    `;

    return (
        <Card>
            <Vid>
            <ReactPlayer
                url={url}
                controls={true}
                width={"100%"}
                height={"100%"}
                playing={false}
            />
            </Vid>
            <VideoName>{name}</VideoName>
        </Card>
    );
}

export default Video;
