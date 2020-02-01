import React from 'react';
import styled from "styled-components";
import SideMenu from "../components/profile/SideMenu";

const Container = styled.div` 
    margin-top: 2px;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    @media (max-width: 768px) {
      flex-direction: column;
    }
`;

function Profile(props) {

    return (
            <Container>
                <SideMenu/>
            </Container>
    );
}

export default Profile;