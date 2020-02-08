import React, {useContext, useState} from 'react';
import styled from "styled-components";
import {RootContext} from "../../contexts/RootContext";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import {Link} from "react-router-dom";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {UserContext} from "../../contexts/UserContext";
import UserAvatar from "../util/UserAvatar";
import {getUserName} from "../../util/util";
import {deleteRate, sendRate} from "../../util/axios-handler";
import useRates from "../../hooks/useRates";
import {CustomIconButton} from "../../styled-components/styled";

const BasicDetails = styled.div`
    margin-top: 15px;
    padding: 0 5px 8px;
    border-bottom: 1px solid ${props => props.theme.transparentSyntax};
    color: ${props => props.theme.syntax};
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
    border-bottom: 1px solid ${props => props.theme.transparentSyntax};
    color: ${props => props.theme.syntax};
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
    margin: 6px 0 6px 10px;
    font-size: 15px;
    font-weight: bold;
`;

const RateButton = styled(CustomIconButton)`
    padding: 10px !important;
    box-shadow: ${props => props.active === "true" && 
        `inset 0 0 40px ${props.theme.transparentSyntax}`
    };
`;

const MoreButton = styled(CustomIconButton)`
    margin-left: 44px !important;
    margin-top: 5px !important;
`;

function VideoDetails() {

    const {state} = useContext(RootContext);
    const {isLoggedIn} = useContext(UserContext);
    const {id, title, description, creationDate, author} = state.selectedVideo;
    const [showMore, setShowMore] = useState(false);
    const [rates, setRates, userRate, setUserRate] = useRates(id, isLoggedIn);

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
            <BasicDetails className={"transition"}>
                <Title>{title}</Title>
                <CreationDate>{new Date(creationDate).toDateString()}</CreationDate>
                <Rating>
                    <RateButton
                        disabled={!isLoggedIn}
                        name={"UP"}
                        active={(userRate === "UP").toString()}
                        onClick={handleRates}
                    >
                        <ThumbUpIcon />
                    </RateButton>
                    <div>{rates.UP}</div>
                    <RateButton
                        disabled={!isLoggedIn}
                        name={"DOWN"}
                        active={(userRate === "DOWN").toString()}
                        onClick={handleRates}
                    >
                        <ThumbDownIcon/>
                    </RateButton>
                    <div>{rates.DOWN}</div>
                </Rating>
            </BasicDetails>
            <DescriptionContainer className={"transition"}>
                <User>
                    <UserAvatar user={author && author}/>
                    <Name to={"/"}>{getUserName(author)}</Name>
                </User>
                <Description more={showMore}>
                    {description}
                </Description>
                    <MoreButton
                        size="small"
                        onClick={() => setShowMore(!showMore)}
                    >
                       {!showMore ? <KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon/>}
                    </MoreButton>
            </DescriptionContainer>
        </div>
    );
}

export default VideoDetails;