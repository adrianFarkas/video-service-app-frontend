import React, {useContext} from 'react';
import VideoLinkCard from "./VideoLinkCard";
import styled from "styled-components";
import {RootContext} from "../../contexts/RootContext";

const Container = styled.div`
    width: 90%;
    margin: 20px auto;
    @media (max-width: 600px) {
        width: 100%;
    }
`;

const VideoLinkGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 8px;
    @media (max-width: 1200px) {
       grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

function VideoLinkSection() {
    const {state: {videos}} = useContext(RootContext);

    const videoCards = videos.map((video, i) => <VideoLinkCard key={i} video={video}/>);

    return (
        <Container>
            <VideoLinkGrid>
                {videoCards}
            </VideoLinkGrid>
        </Container>
    );
}

export default VideoLinkSection;