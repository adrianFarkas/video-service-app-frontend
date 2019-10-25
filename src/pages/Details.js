import React, {useContext, useEffect} from 'react';
import {RootContext} from "../contexts/RootContext";
import Video from "../components/Video";
import VideoLoading from "../components/VideoLoading";
import styled from "styled-components";
import CommentForm from "../components/CommentForm";
import CommentSection from "../components/CommentSection";
import {dark, light} from "../theme";


function Details(props) {
    const videoId = props.match.params.id;

    const {state, fetchVideoById} = useContext(RootContext);
    const {isLightTheme} = state;
    const theme = isLightTheme ? light : dark;
    const actVideoId = state.selectedVideo.id;
    document.body.style.backgroundColor = theme.background;

    useEffect(() => {
        fetchVideoById(videoId);
    }, [videoId]);

    const Page = styled.div`
        width: 95%;
        margin: 0 auto;
    `;

    const Wrapper = styled.div`
        width: 1100px;
        margin: 40px 30px;
    `;

    const video = parseInt(videoId) === actVideoId ? <Video/> : <VideoLoading/>;

    return (
        <Page>
            <Wrapper>
                {video}
                <CommentForm/>
            </Wrapper>
        </Page>
    );
}

export default Details;