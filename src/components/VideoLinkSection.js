import React, {useContext} from 'react';
import VideoLinkCard from "./VideoLinkCard";
import styled from "styled-components";
import {RootContext} from "../contexts/RootContext";
import {ThemeContext} from "../contexts/ThemeContext";

function VideoLinkSection(props) {
    const {state: {videos}} = useContext(RootContext);
    const {theme} = useContext(ThemeContext);

    const VideoGrid = styled.div`
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 8px;
        @media (max-width: 1024px) {
           grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 900px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 480px) {
            width: unset;
            grid-template-columns: repeat(1, 1fr);
        }
    `;

    const Title = styled.div`
        font-size: 1.5em;
        font-family: Arial, Helvetica, sans-serif;
        padding: 10px 0;
        color: ${theme.syntax};
        @media (max-width: 480px) {
           //width: unset;
        }
    `;

    const Container = styled.div`
        width: 80%;
        margin: 0 auto;
        @media (max-width: 480px) {
           width: unset;
        }
    `;

    const videoCards = videos.map((video, i) => <VideoLinkCard key={i} video={video}/>);

    return (
        <Container>
            <Title>Recommended</Title>
            <VideoGrid>
                {videoCards}
            </VideoGrid>
        </Container>
    );
}

export default VideoLinkSection;