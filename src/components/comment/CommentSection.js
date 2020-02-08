import React, {useContext, useEffect} from 'react';
import Comment from "./Comment";
import {CommentContext} from "../../contexts/CommentContext";
import styled from "styled-components";

const CommentsNum = styled.div`
    color: ${props => props.theme.syntax};
    padding: 5px 5px 10px;
    border-bottom: 1px solid ${props => props.theme.transparentSyntax};
`;

function CommentSection({videoId}) {

    const {comments, fetchCommentsByVideo} = useContext(CommentContext);

    useEffect(() => {
        fetchCommentsByVideo(videoId);
    }, [fetchCommentsByVideo, videoId]);

    const recommendations = comments ?
        comments.map((r, i) => <Comment key={i} data={r}/>)
        : null;

    return (
        <div>
            <CommentsNum className={"transition"}>{comments.length} Comment</CommentsNum>
            <div>
                {recommendations}
            </div>
        </div>
    );
}

export default CommentSection;