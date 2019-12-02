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
        @media (max-width: 480px) {
           width: unset;
           margin: 0;
        }
    `;

    const Wrapper = styled.div`
        width: 98%;
        max-width: 1850px;
        margin: 0 auto;
        display: flex;
    `;

    const VideoSection = styled.div`
        width: 60%;
        @media (max-width: 768px) {
           width: 98%;
           margin: 0 auto;
        }
        @media (max-width: 480px) {
           width: 98%;
           margin: 0 auto;
        }
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