import React, {useContext} from 'react';
import VideoLinkCard from "./VideoLinkCard";
import styled from "styled-components";
import {RootContext} from "../contexts/RootContext";
import {ThemeContext} from "../contexts/ThemeContext";
import {Container} from "../styled-components/styled";

function VideoLinkSection(props) {
    const {state: {videos}} = useContext(RootContext);
    const {theme} = useContext(ThemeContext);

    const VideoLinkGrid = styled.div`
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