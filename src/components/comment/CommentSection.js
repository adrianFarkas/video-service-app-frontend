import React, {useContext, useEffect} from 'react';
import Comment from "./Comment";
import {CommentContext} from "../../contexts/CommentContext";
import styled from "styled-components";
import {ThemeContext} from "../../contexts/ThemeContext";

function CommentSection({videoId}) {

    const {comments, fetchCommentsByVideo} = useContext(CommentContext);
    const {theme} = useContext(ThemeContext);

    useEffect(() => {
        fetchCommentsByVideo(videoId);
    }, [fetchCommentsByVideo, videoId]);

    const CommentsNum = styled.div`
      color: ${theme.syntax};
      padding: 5px 5px 10px;
      border-bottom: 1px solid ${theme.transparentSyntax};
    `;

    const recommendations = comments ?
        comments.map((r, i) => <Comment key={i} data={r}/>)
        : <div>Loading...</div>;

    return (
        <div>
            <CommentsNum>{comments.length} Comment</CommentsNum>
            <div>
                {recommendations}
            </div>
        </div>
    );
}

export default CommentSection;