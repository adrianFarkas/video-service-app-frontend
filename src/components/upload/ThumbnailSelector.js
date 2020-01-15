import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Skeleton from "@material-ui/lab/Skeleton";
import axios from "axios";
import Fab from "@material-ui/core/Fab";
import {Refresh} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core";
import {colors} from "../../theme";
import {Img} from "../../styled-components/styled";

function ThumbnailSelector({file, selectHandler, selected}) {
    const initState = [null, null, null, null];
    const [thumbnailPreviews, setThumbnailPreviews] = useState(initState);

    useEffect(() => {
        if (file) getThumbnails(file);
    }, [file]);

    const ThumbnailContainer = styled.div`
        width: 100%;
        display: ${file ? "grid" : "none"};
        grid-template-columns: repeat(4, minmax(0, 160px));
        grid-gap: 10px;
        @media (max-width: 900px) {
            grid-template-columns: repeat(2, minmax(0, 180px));
        }
    `;

    const CustomThumbnail = styled.div`
        height: 100px;
        box-sizing: border-box;
        color: rgba(0,52,205,0.8);
        cursor: pointer;
        transition: transform .5s ease-in-out 0s;
        position: relative;
        z-index: 0;
        transform: ${props => props.selected && "scale(0.95)"};
        :after {
          content: "Selected";
          display: ${props => props.selected ? "flex" : "none"};
          color: #555555;
          text-transform: uppercase;
          justify-content: center;
          align-items: center;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: rgba(255,255,255,0.6);
          z-index: 1;
        }
        :hover {
          transform: ${props => !props.selected && !props.isLoading && "scale(1.1)"};
          z-index: 1;
        }
    `;

    const useStyles = makeStyles({
        root: {
            margin: "10px 0",
            display: !file && "none",
            background: colors.claret,
            boxShadow: "unset",
            color: "#fff",
            "&:hover, &:active": {
                background: colors.claret,
                boxShadow: "unset",
            },
        }
    });
    const classes = useStyles();

    const getThumbnails = (file) => {
        const data = new FormData();
        data.append("video", file);
        axios.post("/create/thumbnails", data)
            .then(res => setThumbnailPreviews(res.data));
    };

    const refresh = (e) => {
        setThumbnailPreviews(initState);
        selectHandler(e, null);
        getThumbnails(file)
    };

    const thumbnails = thumbnailPreviews.map((url, i) => url ?
        <CustomThumbnail key={i} selected={url === selected}>
            <Img src={url} alt={""} onClick={(e) => selectHandler(e, url)}/>
        </CustomThumbnail>
        :
        <CustomThumbnail key={i} isLoading={url === null}>
            <Skeleton variant={"rect"} height={"100%"}/>
        </CustomThumbnail>
    );

    return (
        <div>
            <h3>Thumbnail</h3>
            <div>Please select an image that illustrates what the video contains.</div>
            <div>(Generating will start after you selected a video!)</div>
            <Fab size="small" className={classes.root} onClick={refresh}>
                <Refresh />
            </Fab>
            <ThumbnailContainer>
                {thumbnails}
            </ThumbnailContainer>
        </div>
    );
}

export default ThumbnailSelector;