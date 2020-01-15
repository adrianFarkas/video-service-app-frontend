import React, {useContext} from 'react';
import {RootContext} from "../../contexts/RootContext";
import VideoName from "./VideoName";
import {VideoGrid, VidRow} from "../../styled-components/styled";
import VideoLoading from "./VideoLoading";

function Video(props) {

    const {state} = useContext(RootContext);
    const {title, videoLink} = state.selectedVideo;

    const video = videoLink ?
        <video width={"100%"} height={"100%"} controls>
            <source src={videoLink}/>
        </video>
        :
        <VideoLoading/>;

    return (
        <VideoGrid>
            <VidRow>
                {video}
            </VidRow>
            <VideoName>{title}</VideoName>
        </VideoGrid>
    );
}

export default Video;
