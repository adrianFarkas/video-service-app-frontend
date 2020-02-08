import React, {useContext, useEffect} from 'react';
import {RootContext} from "../contexts/RootContext";
import Video from "../components/video/Video";
import styled, {ThemeProvider} from "styled-components";
import CommentForm from "../components/comment/CommentForm";
import CommentSection from "../components/comment/CommentSection";
import VideoDetails from "../components/video/VideoDetails";
import {ThemeContext} from "../contexts/ThemeContext";

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

function Watch(props) {
    window.scrollTo(0, 0);
    const videoId = props.match.params.id;

    const {fetchVideoById} = useContext(RootContext);
    const {theme} = useContext(ThemeContext);

    useEffect(() => {
        fetchVideoById(videoId);
    }, [videoId, fetchVideoById]);

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <VideoSection>
                    <Video/>
                    <VideoDetails/>
                    <CommentForm/>
                    <CommentSection videoId={videoId}/>
                </VideoSection>
            </Container>
        </ThemeProvider>
    );
}

export default Watch;