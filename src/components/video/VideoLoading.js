import React from 'react';
import {CircularProgress} from "@material-ui/core";
import styled from "styled-components";
import {colors} from "../../theme";
import {VideoGrid, VidRow} from "../../styled-components/styled";

function VideoLoading(props) {

    const LoadingWrapper = styled(VidRow)`
        background-color: ${colors.lightGrey2};
    `;

    return (
        <VideoGrid>
            <LoadingWrapper/>
        </VideoGrid>
    );
}

export default VideoLoading;