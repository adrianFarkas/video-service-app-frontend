import React, {useContext, useState} from 'react';
import getThumb from 'video-thumbnail-url';
import styled from "styled-components";
import {Link} from "react-router-dom"
import {ThemeContext} from "../contexts/ThemeContext";


function VideoLinkCard(props) {
    const {theme} = useContext(ThemeContext);

    const [thumbNail, setThumbNail] = useState("/img/empty_img.png");
    const {id, name, url} = props.video;

    getThumb(url)
        .then(thumb_url => setThumbNail(thumb_url));

    const Card = styled.div`
         min-width: 0;
         background-color: ${theme.cardBg};
         border-radius: 5px;
         transition: all 0.3s ease-in-out 0s;
         :hover {
             box-shadow: 0 0 10px ${theme.syntax};
             transform: translateY(-6px);
         }
         @media (max-width: 1024px){
             :hover {
                 box-shadow: unset;
                 transform: unset;
              }
         }
    `;

    const ThumbnailImg = styled.img`
        width: 100%;
        height: 10vw;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
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

    const linkStyle = {
        textDecoration: "none",
        color: theme.syntax
    };

    return (
        <Card>
            <Link to={"/video/" + id} style={linkStyle}>
                <ThumbnailImg src={thumbNail == null ? "/img/empty_img.png" : thumbNail}/>
                <Title>{name}</Title>
            </Link>
        </Card>
    );
}

export default VideoLinkCard;