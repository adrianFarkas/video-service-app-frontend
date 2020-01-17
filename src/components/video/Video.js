import React, {useContext} from 'react';
import {RootContext} from "../../contexts/RootContext";
import styled from "styled-components";

function Video() {

    const {state} = useContext(RootContext);
    const {videoLink} = state.selectedVideo;

    const Video = styled.div`
        width: 100%;
        z-index: 1;
        @media (max-width: 500px) {
            position: sticky;
            top: 62px;
        }
    `;

    return (
        <Video>
            <video width={"100%"}  controls >
                <source src={videoLink}/>
            </video>
        </Video>
    );
}

export default Video;
