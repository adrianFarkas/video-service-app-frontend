import React, {useContext} from 'react';
import {RootContext} from "../contexts/RootContext";
import Comment from "./Comment";

function CommentSection(props) {

    const {state} = useContext(RootContext);

    const recommendations = state.selectedVideo["recommendations"] ?
        state.selectedVideo["recommendations"].map((r, i) => <Comment key={i} comment={r}/>)
        : <div>Loading...</div>;

    return (
        <div style={{marginTop: "100px"}}>
            {recommendations}
        </div>
    );
}

export default CommentSection;