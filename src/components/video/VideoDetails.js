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
import {AuthContext} from "../../contexts/AuthContext";
import UserAvatar from "../util/UserAvatar";
import {getUserName} from "../../util/util";

const BasicDetails = styled.div`
    margin-top: 15px;
    padding: 0 5px;
    border-bottom: 1px solid ${props => props.transparentSyntax};
    color: ${props => props.syntax};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Title = styled.div`
    font-size: 28px;
    width: 100%;
`;

const CreationDate = styled.div`
    font-size: 15px;
    margin: 10px 0 0;
`;

const Rating = styled.div`
    display: flex;
    align-items: center;
`;

const DescriptionContainer = styled.div`
    padding: 15px 5px 10px;
    border-bottom: 1px solid ${props => props.transparentSyntax};
    color: ${props => props.syntax};
`;

const User = styled.div`
    display: flex;
    align-items: flex-start;
`;

const Description = styled.div`
    font-size: 18px;
    margin-left: 50px;
    white-space: pre-wrap;
    max-height: ${props => !props.more && "40px"};
    overflow: ${props => !props.more && "hidden"};
`;

const Name = styled(Link)`
    margin: 6px 0;
    font-size: 15px;
    font-weight: bold;
`;

function VideoDetails() {

    const {theme} = useContext(ThemeContext);
    const {state} = useContext(RootContext);
    const {isLoggedIn} = useContext(AuthContext);
    const {title, description, creationDate, author} = state.selectedVideo;
    const [showMore, setShowMore] = useState(false);

    const useStyle = makeStyles({
        icon: {
            color: theme.syntax,
            "&:disabled": {
                color: theme.disabled,
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

    return (
        <div>
            <BasicDetails {...theme} className={"transition"}>
                <Title>{title}</Title>
                <CreationDate>{new Date(creationDate).toDateString()}</CreationDate>
                <Rating>
                    <IconButton className={classes.icon} disabled={!isLoggedIn}>
                        <ThumbUpIcon/>
                    </IconButton>
                    <div>10k</div>
                    <IconButton className={classes.icon} disabled={!isLoggedIn}>
                        <ThumbDownIcon/>
                    </IconButton>
                    <div>1k</div>
                </Rating>
            </BasicDetails>
            <DescriptionContainer {...theme} className={"transition"}>
                <User>
                    <UserAvatar className={classes.avatar} user={author && author}/>
                    <Name to={"/"}>{getUserName(author)}</Name>
                </User>
                <Description more={showMore}>
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