import React, {useContext} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom"
import {ThemeContext} from "../../contexts/ThemeContext";

function VideoLinkCard(props) {
    const {theme} = useContext(ThemeContext);

    const {id, title, thumbnailLink} = props.video;

    const LinkCard = styled(Link)`
         min-width: 0;
         color: ${theme.syntax};
         background-color: ${theme.cardBg};
         border-radius: 3px;
         transition: all 0.3s ease-in-out 0s;
         text-decoration: none;
         @media (min-width: 1024px){
             :hover {
                 color: ${theme.cardBg};
                 background-color: ${theme.syntax};
                 transform: translateY(-6px);
            }
         }
    `;

    const ThumbnailImg = styled.img`
        width: 100%;
        height: 10vw;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        @media (max-width: 1024px) {
            height: unset;
        }
    `;

    const Title = styled.div`
        font-size: 1.5em;
        margin: 4%;
        text-align: left;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  
        text-overflow: ellipsis;
        @media (max-width: 700px) {
            font-size: 1.1em;
        }
        @media (max-width: 480px) {
            font-size: 1.4em;
        }
    `;

    return (
        <LinkCard to={"/video/" + id} className={"link-card"}>

            <ThumbnailImg src={thumbnailLink == null ? "/img/empty_img.png" : thumbnailLink}/>
            <Title>{title}</Title>
        </LinkCard>
    );
}

export default VideoLinkCard;