import React from 'react';
import SubPage from "./SubPage";
import styled from "styled-components";

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
    font-size: 50px;
    font-weight: bold;
    text-align: center;
`;

function VideoList({name, page}) {

    return (
        <SubPage
            title={"My Videos"}
            show={page === name}
        >
            <Content>
                Under Development
            </Content>
        </SubPage>
    );
}

export default VideoList;