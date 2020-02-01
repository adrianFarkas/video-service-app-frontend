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
import {UserContext} from "../../contexts/UserContext";
import UserAvatar from "../util/UserAvatar";
import {getUserName} from "../../util/util";
import {deleteRate, sendRate} from "../../util/axios-handler";
import useRates from "../../hooks/useRates";

const BasicDetails = styled.div`
    margin-top: 15px;
    padding: 0 5px 8px;
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
    justify-content: space-between;
    min-width: 150px;
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
    const {isLoggedIn} = useContext(UserContext);
    const {id, title, description, creationDate, author} = state.selectedVideo;
    const [showMore, setShowMore] = useState(false);
    const [rates, setRates, userRate, setUserRate] = useRates(id, isLoggedIn);

    const useStyle = makeStyles({
        iconBtn: {
            color: theme.syntax,
            "&:disabled": {
                color: theme.disabled,
            }
        },
        thumbUp: {
            padding: "10px",
            boxShadow: userRate === "UP" &&
                `inset 0 0 40px ${theme.transparentSyntax}`,
        },
        thumbDown: {
            padding: "10px",
            boxShadow: userRate === "DOWN" &&
                `inset 0 0 40px ${theme.transparentSyntax}`,
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

    const handleRates = (e) => {
        const name = e.currentTarget.name;
        if (userRate === name)
            deleteRate(id)
                .then(res => {
                    setRates(res);
                    setUserRate(null);
                });
        else sendRate(id, name)
            .then(res => {
                setRates(res);
                setUserRate(name);
            });
    };

    return (
        <div>
            <BasicDetails {...theme} className={"transition"}>
                <Title>{title}</Title>
                <CreationDate>{new Date(creationDate).toDateString()}</CreationDate>
                <Rating>
                    <IconButton
                        className={`${classes.iconBtn} ${classes.thumbUp}`}
                        disabled={!isLoggedIn}
                        name={"UP"}
                        onClick={handleRates}
                    >
                        <ThumbUpIcon />
                    </IconButton>
                    <div>{rates.UP}</div>
                    <IconButton
                        className={`${classes.iconBtn} ${classes.thumbDown}`}
                        disabled={!isLoggedIn}
                        name={"DOWN"}
                        onClick={handleRates}
                    >
                        <ThumbDownIcon/>
                    </IconButton>
                    <div>{rates.DOWN}</div>
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
                        className={`${classes.iconBtn} ${classes.toggler}`}
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