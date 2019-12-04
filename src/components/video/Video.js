import React, {useContext} from 'react';
import ReactPlayer from "react-player";
import {RootContext} from "../../contexts/RootContext";
import VideoName from "./VideoName";
import {VideoGrid, VidRow} from "../../styled-components/styled";

function Video(props) {

    const {state} = useContext(RootContext);
    const {name, url} = state.selectedVideo;


    return (
        <VideoGrid>
            <VidRow>
                <ReactPlayer
                    url={url}
                    controls={true}
                    width={"100%"}
                    height={"100%"}
                    playing={false}
                />
            </VidRow>
            <VideoName>{name}</VideoName>
        </VideoGrid>
    );
}

export default Video;
