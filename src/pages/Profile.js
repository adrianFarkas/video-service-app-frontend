import React, {useContext} from 'react';
import styled, {ThemeProvider} from "styled-components";
import VideoList from "../components/profile/VideoList";
import Settings from "../components/profile/Settings";
import SideMenu from "../components/profile/SideMenu";
import {useParams} from "react-router";
import {ThemeContext} from "../contexts/ThemeContext";

const Container = styled.div` 
    margin-top: 2px;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    @media (max-width: 768px) {
      flex-direction: column;
    }
`;

const Content = styled.div`
    position: relative;
    width: 100%;
`;

function Profile(props) {
    const {page} = useParams();
    const {theme} = useContext(ThemeContext);

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <SideMenu/>
                <Content>
                    <VideoList name={"videos"} page={page}/>
                    <Settings name={"settings"} page={page}/>
                </Content>
            </Container>
        </ThemeProvider>
    );
}

export default Profile;