import React, {useContext} from 'react';
import VideoLinkCard from "./VideoLinkCard";
import styled from "styled-components";
import {RootContext} from "../../contexts/RootContext";
import {ThemeContext} from "../../contexts/ThemeContext";
import {Container} from "../../styled-components/styled";

function VideoLinkSection() {
    const {state: {videos}} = useContext(RootContext);
    const {theme} = useContext(ThemeContext);

    const Container = styled.div`
        width: 90%;
        margin: 0 auto;
        @media (max-width: 600px) {
            width: 100%;
        }
`

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

    const Title = styled.div`
        font-size: 1.5em;
        font-family: Arial, Helvetica, sans-serif;
        padding: 10px 0;
        color: ${theme.syntax};
    `;

    const videoCards = videos.map((video, i) => <VideoLinkCard key={i} video={video}/>);

    return (
        <Container>
            <Title>Recommended</Title>
            <VideoLinkGrid>
                {videoCards}
            </VideoLinkGrid>
        </Container>
    );
}

export default VideoLinkSection;