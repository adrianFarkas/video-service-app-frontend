import React, {useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import Skeleton from "@material-ui/lab/Skeleton";
import Fab from "@material-ui/core/Fab";
import {Refresh} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core";
import {ThemeContext} from "../../contexts/ThemeContext";
import {getThumbnails} from "../../util/axios-handler";

const ThumbnailContainer = styled.div`
    width: 100%;
    display: ${props => props.display ? "grid" : "none"};
    grid-template-columns: repeat(4, minmax(0, 160px));
    grid-gap: 10px;
    @media (max-width: 900px) {
        grid-template-columns: repeat(2, minmax(0, 180px));
    }
`;

const CustomThumbnail = styled.div`
    height: 90px;
    box-sizing: border-box;
    cursor: pointer;
    transition: transform .3s ease-in-out 0s;
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

const Wrapper = styled.div`
   color: ${props => props.syntax};
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
`;

function ThumbnailSelector({file, selectHandler, selected}) {
    const initState = [null, null, null, null];
    const [thumbnailPreviews, setThumbnailPreviews] = useState(initState);
    const {theme} = useContext(ThemeContext);

    useEffect(() => {
        if (file) getThumbnailPreviews(file);
    }, [file]);


    const useStyles = makeStyles({
        root: {
            margin: "10px 0",
            display: !file && "none",
            background: "none",
            boxShadow: "unset",
            color: theme.syntax,
            boxSizing: "border-box",
            border: `2px solid ${theme.syntax}`,
            "&:hover, &:active": {
                background: theme.buttonHover,
                boxShadow: "unset",
            },
        }
    });
    const classes = useStyles();

    const getThumbnailPreviews = (file) => {
        const data = new FormData();
        data.append("video", file);
        getThumbnails(data)
            .then(res => setThumbnailPreviews(res));
    };

    const refresh = (e) => {
        setThumbnailPreviews(initState);
        selectHandler(e, null);
        getThumbnailPreviews(file)
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
        <Wrapper {...theme} className={"transition"}>
            <h3>Thumbnail</h3>
            <div>Please select an image that illustrates what the video contains.</div>
            <div>(Generating will start after you selected a video!)</div>
            <Fab size="small" className={classes.root} onClick={refresh}>
                <Refresh />
            </Fab>
            <ThumbnailContainer display={file}>
                {thumbnails}
            </ThumbnailContainer>
        </Wrapper>
    );
}

export default ThumbnailSelector;