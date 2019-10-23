import React, {useContext} from 'react';
import VideoLinkCard from "./VideoLinkCard";
import styled from "styled-components";

import {RootContext} from "../contexts/RootContext";

function VideoSection(props) {
    const {state} = useContext(RootContext);
    const {videos} = state;

    const videoCards = videos.map((video, i) => <VideoLinkCard key={i} video={video}/>);

    const Section = styled.div`
        width: 1400px;
        display: flex;
        flex-flow: row wrap;
        margin: 0 auto;
    `;

    const Wrapper = styled.div`
        margin: 20px auto;
        width: 1500px;
        border-top: 1px solid #ffffff;
        border-bottom: 1px solid #ffffff;
        padding: 20px;

    `;

    return (
        <Wrapper>
            <Section>
                {videoCards}
            </Section>
        </Wrapper>
    );
}

export default VideoSection;