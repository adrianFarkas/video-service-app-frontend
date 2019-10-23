import React, {useState} from 'react';
import getThumb from 'video-thumbnail-url';
import styled from "styled-components";
import {Link} from "react-router-dom";

function VideoLinkCard(props) {
    const [thumbNail, setThumbNail] = useState("/img/empty_img.png");
    const {id, name, url} = props.video;

    getThumb(url)
        .then(thumb_url => setThumbNail(thumb_url));

    const Card = styled.div`
        width: 320px;
        min-height: 320px;
        background-color: #484848;
        border-radius: 5px
        color: #ffffff;
        :hover {
            box-shadow: 0 0 15px #ffffff;
            transform: scale(1.03);
          }
    `;

    const ThumbnailImg = styled.img`
        width: 320px;
        height: 200px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    `;

    const Title = styled.div`
        font-size: 28px;
        margin: 20px 10px 20px;
        text-align: left;
    `;

    const linkStyle = {
        textDecoration: "none",
        padding: "15px",
    };

    return (
        <Link to={"/video/" + id} style={linkStyle}>
            <Card>
                <ThumbnailImg src={thumbNail == null ? "/img/empty_img.png" : thumbNail}/>
                <Title>{name}</Title>
            </Card>
        </Link>
    );
}

export default VideoLinkCard;