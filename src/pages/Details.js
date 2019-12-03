import React, {useContext, useEffect} from 'react';
import {RootContext} from "../contexts/RootContext";
import Video from "../components/Video";
import VideoLoading from "../components/VideoLoading";
import styled from "styled-components";
import CommentForm from "../components/CommentForm";
import CommentSection from "../components/CommentSection";
import Navbar from "../components/Navbar";


function Details(props) {
    const videoId = props.match.params.id;

    const {state, fetchVideoById} = useContext(RootContext);
    const actVideoId = state.selectedVideo.id;

    useEffect(() => {
        fetchVideoById(videoId);
    }, [videoId, fetchVideoById]);

    const Container = styled.div`
        width: 95%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(3, 2fr);
        @media (max-width: 480px) {
           width: unset;
           display: unset;
        }
    `;

    const VideoSection = styled.div`
        grid-column-end: span 2;
        height: 100%;
        min-width: 300px;
    `;

    const video = parseInt(videoId) === actVideoId ? <Video/> : <VideoLoading/>;

    return (
        <div>
            <Navbar/>
            <Container>
                <VideoSection>
                    {video}
                    <CommentForm/>
                    <CommentSection/>
                </VideoSection>
            </Container>
        </div>
    );
}

export default Details;