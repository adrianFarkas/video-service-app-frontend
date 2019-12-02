import React, {useContext} from 'react';
import VideoLinkCard from "./VideoLinkCard";
import styled from "styled-components";
import {RootContext} from "../contexts/RootContext";
import {ThemeContext} from "../contexts/ThemeContext";

function VideoLinkSection(props) {
    const {state} = useContext(RootContext);
    const {videos} = state;
    const {theme} = useContext(ThemeContext);

    const Section = styled.div`
        width: 100%;
        max-width: 1750px;
        min-width: 320px;
        margin: 0 auto;
        display: flex;
        flex-flow: wrap;
    `;

    const Title = styled.div`
        font-size: 30px;
        font-family: Arial, Helvetica, sans-serif;
        padding: 10px 0;
        color: ${theme.syntax};
    `;

    const Container = styled.div`
        width: 90%;
        margin: 0 auto;
        @media (max-width: 480px) {
           width: unset;
           margin: 0;
        }
    `;

    const videoCards = videos.map((video, i) => <VideoLinkCard key={i} video={video}/>);

    return (
        <Container>
            <Title>Recommended</Title>
            <Section>
                {videoCards}
            </Section>
        </Container>
    );
}

export default VideoLinkSection;