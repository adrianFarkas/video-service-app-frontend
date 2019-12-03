import React, {useContext} from 'react';
import ReactPlayer from "react-player";
import {RootContext} from "../contexts/RootContext";
import styled from "styled-components";
import VideoName from "./VideoName";

function Video(props) {

    const {state} = useContext(RootContext);
    const {name, url} = state.selectedVideo;

    const Card = styled.div`
         display: grid;
         grid-template-rows: repeat(4, 1fr);
         height: 47vw;
         min-height: 270px;
    `;

    const Vid = styled.div`
         grid-row-end: span 3;
         min-height: 200px;
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
