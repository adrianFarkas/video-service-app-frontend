import React, {useContext, useState} from 'react';
import {ThemeContext} from "../../contexts/ThemeContext";
import styled from "styled-components";
import {RootContext} from "../../contexts/RootContext";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import {makeStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import useAuthor from "../../hooks/useAuthor";
import UserAvatar from "../util/UserAvatar";

function VideoDetails() {

    const {theme} = useContext(ThemeContext);
    const {state} = useContext(RootContext);
    const {title, description, creationDate, userId} = state.selectedVideo;
    const author = useAuthor(null, userId);
    const [showMore, setShowMore] = useState(false);

    const BasicDetails = styled.div`
        margin-top: 15px;
        padding: 0 5px;
        border-bottom: 1px solid ${theme.transparentSyntax};
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    `;

    const Title = styled.div`
        font-size: 28px;
        width: 100%;
        color: ${theme.syntax};
    `;

    const CreationDate = styled.div`
        font-size: 15px;
        color: ${theme.syntax};
        margin: 10px 0 0;
    `;

    const Rating = styled.div`
        display: flex;
        align-items: center;
    `

    const Rate = styled.div`
        color: ${theme.syntax};
    `;
    const DescriptionContainer = styled.div`
      padding: 15px 5px 10px;
      border-bottom: 1px solid ${theme.transparentSyntax};
    `;

    const useStyle = makeStyles({
        icon: {
            color: theme.syntax,
            "&:disabled": {
                color: theme.syntax,
            },
        },
        toggler: {
            marginLeft: "44px",
            marginTop: "5px",
        },
        avatar: {
            marginRight: "10px",
        }
    });
    const classes = useStyle();

    const User = styled.div`
      display: flex;
      align-items: flex-start;
    `;

    const Description = styled.div`
        color: ${theme.syntax};
        font-size: 18px;
        margin-left: 50px;
        white-space: pre-wrap;
        max-height: ${!showMore && "40px"};
        overflow: ${!showMore && "hidden"};
        transition: all .5s ease-in-out 0s;
    `;

    const Name = styled(Link)`
      margin: 6px 0;
      color: ${theme.syntax};
      font-size: 15px;
      font-weight: bold;
    `;

    return (
        <div>
            <BasicDetails>
                <Title>{title}</Title>
                <CreationDate>{new Date(creationDate).toDateString()}</CreationDate>
                <Rating>
                    <IconButton className={classes.icon} disabled>
                        <ThumbUpIcon/>
                    </IconButton>
                    <Rate>10k</Rate>
                    <IconButton className={classes.icon} disabled>
                        <ThumbDownIcon/>
                    </IconButton>
                    <Rate>1k</Rate>
                </Rating>
            </BasicDetails>
            <DescriptionContainer>
                <User>
                    <UserAvatar className={classes.avatar} user={author}/>
                    <Name to={"/"}>{`${author.firstName} ${author.lastName}`}</Name>
                </User>
                <Description>
                    {description}
                </Description>
                    <IconButton
                        className={`${classes.icon} ${classes.toggler}`}
                        size="small"
                        onClick={() => setShowMore(!showMore)}
                    >
                       {!showMore ? <KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon/>}
                    </IconButton>
            </DescriptionContainer>
        </div>
    );
}

export default VideoDetails;