import React from 'react';
import styled from "styled-components";
import VideoList from "../components/profile/VideoList";
import Settings from "../components/profile/Settings";
import SideMenu from "../components/profile/SideMenu";
import {useParams} from "react-router";

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

    return (
        <Container>
            <SideMenu/>
            <Content>
                <VideoList name={"videos"} page={page}/>
                <Settings name={"settings"} page={page}/>
            </Content>
        </Container>
    );
}

export default Profile;