import React, {useContext, useEffect} from 'react';
import Comment from "./Comment";
import {CommentContext} from "../../contexts/CommentContext";
import styled from "styled-components";
import {ThemeContext} from "../../contexts/ThemeContext";

const CommentsNum = styled.div`
    color: ${props => props.syntax};
    padding: 5px 5px 10px;
    border-bottom: 1px solid ${props => props.transparentSyntax};
`;

function CommentSection({videoId}) {

    const {comments, fetchCommentsByVideo} = useContext(CommentContext);
    const {theme} = useContext(ThemeContext);

    useEffect(() => {
        fetchCommentsByVideo(videoId);
    }, [fetchCommentsByVideo, videoId]);

    const recommendations = comments ?
        comments.map((r, i) => <Comment key={i} data={r}/>)
        : null;

    return (
        <div>
            <CommentsNum {...theme} className={"transition"}>{comments.length} Comment</CommentsNum>
            <div>
                {recommendations}
            </div>
        </div>
    );
}

export default CommentSection;