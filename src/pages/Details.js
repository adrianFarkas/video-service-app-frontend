import React, {useContext, useEffect} from 'react';
import {RootContext} from "../contexts/RootContext";
import Video from "../components/video/Video";
import VideoLoading from "../components/video/VideoLoading";
import styled from "styled-components";
import CommentForm from "../components/comment/CommentForm";
import CommentSection from "../components/comment/CommentSection";
import Navbar from "../components/navigation/Navbar";


function Details(props) {
    const videoId = props.match.params.id;

    const {fetchVideoById} = useContext(RootContext);

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

    return (
        <div>
            <Navbar/>
            <Container>
                <VideoSection>
                    <Video/>
                    <CommentForm/>
                    <CommentSection/>
                </VideoSection>
            </Container>
        </div>
    );
}

export default Details;