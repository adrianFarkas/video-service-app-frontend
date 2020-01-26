import React, {useContext} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom"
import {ThemeContext} from "../../contexts/ThemeContext";
import {Img} from "../../styled-components/styled"
import UserAvatar from "../util/UserAvatar";
import {makeStyles} from "@material-ui/styles";
import Tooltip from "@material-ui/core/Tooltip";
import {getElapsedTime, getUserName} from "../../util/util";

const LinkCard = styled(Link)`
    min-width: 250px;
    background-color: ${props => props.theme.cardBg};
    transition: all 0.5s;
    @media (min-width: 1024px){
        :hover {
            background-color: ${props => props.theme.cardBgHover};
            transform: translateY(-5px);
        }
    }
`;

const Details = styled.div`
    padding: 5px 10px;
    display: flex;
    color: ${props => props.syntax};
`;

const Texts = styled.div`
    padding-right: 30px;
`;

const User = styled.div`
    margin-top: 10px;
    display: block;
    color: ${props => props.color};
`;

const Text = styled.div`
    margin-top: 10px;
    word-wrap: break-word;
`;

const Title = styled(Text)`
    margin-top: 6px;
    font-weight: bold;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

function VideoLinkCard(props) {
    const {theme} = useContext(ThemeContext);

    const {id, title, thumbnailLink, author, creationDate} = props.video;

    const useStyle = makeStyles( {
        root: {
            marginRight: "10px",
        },
        tooltip: {
            fontSize: "15px",
            display: title.length < 45 && "none",
        }
    });
    const classes = useStyle();

    return (
        <LinkCard theme={theme} to={"/video/" + id} className={"link-card"}>
            <Img src={thumbnailLink == null ? "/img/empty_img.png" : thumbnailLink}/>
            <Details {...theme} className={"transition"}>
                <UserAvatar className={classes.root} user={author} />
                <Texts>
                    <Tooltip title={title} placement="bottom" classes={{tooltip: classes.tooltip}}>
                        <Title>{title}</Title>
                    </Tooltip>
                    <User
                        className={"transition"}
                        color={theme.syntax}
                        to={"/"}
                    >
                        {getUserName(author)}
                    </User>
                    <Text>{getElapsedTime(creationDate)}</Text>
                </Texts>
            </Details>
        </LinkCard>
    );
}

export default VideoLinkCard;