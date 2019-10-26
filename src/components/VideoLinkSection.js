import React, {useContext} from 'react';
import VideoLinkCard from "./VideoLinkCard";
import styled from "styled-components";
import {light, dark} from "../theme";

import {RootContext} from "../contexts/RootContext";

function VideoLinkSection(props) {
    const {state} = useContext(RootContext);
    const {videos, isLightTheme} = state;
    const theme = isLightTheme ? light : dark;

    const Section = styled.div`
        width: 1400px;
        display: flex;
        flex-flow: row wrap;
        margin: 0 auto;
        border-top: 1px solid ${theme.syntax};
        border-bottom: 1px solid ${theme.syntax};
        padding: 20px;
    `;

    const Wrapper = styled.div`
        margin: 20px auto;
        width: 1400px;
    `;

    const Title = styled.div`
        font-size: 30px;
        font-family: Arial, Helvetica, sans-serif;
        padding: 10px 0;
        color: ${theme.syntax};
    `;

    const videoCards = videos.map((video, i) => <VideoLinkCard key={i} video={video}/>);

    return (
        <Wrapper>
            <Title>All Videos</Title>
            <Section>
                {videoCards}
            </Section>
        </Wrapper>
    );
}

export default VideoLinkSection;