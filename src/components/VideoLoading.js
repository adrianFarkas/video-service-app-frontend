import React from 'react';
import {CircularProgress} from "@material-ui/core";
import styled from "styled-components";
import {colors} from "../theme";

function VideoLoading(props) {

    const LoadingWrapper = styled.div`
        width: 1100px;
        height: 620px;
        background-color: ${colors.lightGrey2};
    `;

    return (
        <LoadingWrapper>
            <div style={{width: "50px", margin: "0 auto"}}>
                <CircularProgress style={{color: colors.claret, margin: "280px auto"}}/>
            </div>
        </LoadingWrapper>
    );
}

export default VideoLoading;