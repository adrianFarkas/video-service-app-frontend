import React, {useContext, useEffect} from 'react';
import {RootContext} from "../contexts/RootContext";
import Video from "../components/Video";
import VideoLoading from "../components/VideoLoading";
import styled from "styled-components";
import CommentForm from "../components/CommentForm";


function Details(props) {
    const videoId = props.match.params.id;

    const {state, fetchVideoById} = useContext(RootContext);
    const actVideoId = state.selectedVideo.id;

    useEffect(() => {
        fetchVideoById(videoId);
    }, [videoId]);

    const video = parseInt(videoId) === actVideoId ? <Video/> : <VideoLoading/>;

    const Page = styled.div`
        width: 95%;
        margin: 0 auto;
    `;

    const Wrapper = styled.div`
        width: 1100px;
        margin: 40px 30px;
    `;

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