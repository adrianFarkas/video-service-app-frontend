import React, {useContext} from 'react';
import ReactPlayer from "react-player";
import {RootContext} from "../../contexts/RootContext";
import VideoName from "./VideoName";
import {VideoGrid, VidRow} from "../../styled-components/styled";
import VideoLoading from "./VideoLoading";

function Video(props) {

    const {state} = useContext(RootContext);
    const {name, url} = state.selectedVideo;

    const video = url ?
        <ReactPlayer
            url={url}
            controls={true}
            width={"100%"}
            height={"100%"}
            playing={false}
        />
        :
        <VideoLoading/>;

    return (
        <VideoGrid>
            <VidRow>
                {video}
            </VidRow>
            <VideoName>{name}</VideoName>
        </VideoGrid>
    );
}

export default Video;
