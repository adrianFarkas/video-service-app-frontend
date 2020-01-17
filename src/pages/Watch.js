import React, {useContext, useEffect} from 'react';
import {RootContext} from "../contexts/RootContext";
import Video from "../components/video/Video";
import styled from "styled-components";
import CommentForm from "../components/comment/CommentForm";
import CommentSection from "../components/comment/CommentSection";
import VideoDetails from "../components/video/VideoDetails";
import {CommentContext} from "../contexts/CommentContext";

function Watch(props) {
    const videoId = props.match.params.id;

    const {fetchVideoById} = useContext(RootContext);
    const {fetchCommentsByVideo} = useContext(CommentContext);

    useEffect(() => {
        fetchVideoById(videoId);
        fetchCommentsByVideo(videoId);
    }, [videoId, fetchVideoById, fetchCommentsByVideo]);

    const Container = styled.div`
        width: 95%;
        margin: 10px auto 0;
        @media (max-width: 500px) {
           width: 100%;
           margin: 0;
        }
    `;

    const VideoSection = styled.div`
        
        width: 70%;
        @media (max-width: 1000px) {
           width: 100%;
        }
    `;

    return (
        <Container>
            <VideoSection>
                <Video/>
                <VideoDetails/>
                <CommentForm/>
                <CommentSection/>
            </VideoSection>
        </Container>
    );
}

export default Watch;