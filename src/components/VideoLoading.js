import React from 'react';
import {CircularProgress} from "@material-ui/core";
import styled from "styled-components";

function VideoLoading(props) {

    const LoadingWrapper = styled.div`
        width: 1100px;
        height: 620px;
        border: 1px solid white;
    `;

    return (
        <LoadingWrapper>
            <div style={{width: "50px", margin: "25% auto"}}>
            <CircularProgress style={{color: "#630400"}}/>
            </div>
        </LoadingWrapper>
    );
}

export default VideoLoading;