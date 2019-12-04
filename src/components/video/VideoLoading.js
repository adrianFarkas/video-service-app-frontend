import React from 'react';
import {VideoGrid, VidRow} from "../../styled-components/styled";
import Skeleton from "@material-ui/lab/Skeleton";

function VideoLoading(props) {

    return (
        <VideoGrid>
            <VidRow>
                <Skeleton variant="rect" width={"100%"} height={"100%"} />
            </VidRow>
        </VideoGrid>
    );
}

export default VideoLoading;