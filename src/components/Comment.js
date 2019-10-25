import React, {useContext} from 'react';
import Rate from "./Rate";
import styled from "styled-components";
import {dark, light} from "../theme";
import {RootContext} from "../contexts/RootContext";

function Comment(props) {
    const {rating, comment} = props.comment;
    const {state} = useContext(RootContext);
    const {isLightTheme} = state;
    const theme = isLightTheme ? light : dark;

    const Wrapper = styled.div`
        padding: 10px 0;
        color: ${theme.syntax};
    `;

    const CommentCard = styled.div`
        padding: 15px;
        background-color: ${theme.cardBg};
        border-radius: 5px;
    `;

    const Text = styled.div`
        font-size: 30px;
        padding-top: 15px;
        max-width: 920px;
        overflow-wrap: break-word;
    `;

    return (
        <Wrapper>
            <CommentCard>
                <div>Unknown</div>
                <Text>{comment}</Text>
                <Rate
                    value={rating}
                    disabled={true}
                    size={"medium"}
                    style={{textAlign: "right", marginRight: 10}}/>
            </CommentCard>
        </Wrapper>
    );
}

export default Comment;