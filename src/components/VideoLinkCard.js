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
        width: 325px;
        min-height: 320px;
        margin: 8px;
        background-color: ${theme.cardBg};
        border-radius: 5px;
        :hover {
            box-shadow: 0 0 15px ${theme.syntax};
            transform: scale(1.03);
          }
        @media (max-width: 1024px) {
            width: 440px;
        }
        @media (max-width: 900px) {
            width: 389px;
        }
        @media (max-width: 768px) {
            width: 325px;
        }
         @media (max-width: 480px) {
            width: 100%;
            margin: 2px;
        }
    `;

    const ThumbnailImg = styled.img`
        width: 325px;
        height: 200px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        @media (max-width: 1024px) {
            width: 440px;
        }
        @media (max-width: 900px) {
            width: 389px;
        }
        @media (max-width: 768px) {
            width: 325px;
        }
        @media (max-width: 480px) {
            width: 100%;
        }
    `;

    const Title = styled.div`
        font-size: 28px;
        margin: 20px 10px 20px;
        text-align: left;
        overflow-wrap: break-word;
        @media (max-width: 420px) {
            font-size: 28px;
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