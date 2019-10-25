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
    `;

    const Wrapper = styled.div`
        margin: 20px auto;
        width: 1500px;
        border-top: 1px solid ${theme.syntax};
        border-bottom: 1px solid ${theme.syntax};
        padding: 20px;

    `;

    const videoCards = videos.map((video, i) => <VideoLinkCard key={i} video={video}/>);

    return (
        <Wrapper>
            <Section>
                {videoCards}
            </Section>
        </Wrapper>
    );
}

export default VideoLinkSection;