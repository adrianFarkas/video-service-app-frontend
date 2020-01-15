import React, {useContext, useEffect} from 'react';
import Comment from "./Comment";
import {CommentContext} from "../../contexts/CommentContext";

function CommentSection({videoId}) {

    const {comments, fetchCommentsByVideo} = useContext(CommentContext);

    useEffect(() => {
        fetchCommentsByVideo(videoId)
    }, [videoId, fetchCommentsByVideo]);

    const recommendations = comments ?
        comments.map((r, i) => <Comment key={i} comment={r}/>)
        : <div>Loading...</div>;

    return (
        <div style={{marginTop: "100px"}}>
            {recommendations}
        </div>
    );
}

export default CommentSection;