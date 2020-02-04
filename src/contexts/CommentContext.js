import React, {createContext, useCallback, useReducer} from 'react';
import rootReducer from "../reducers/rootReducer";
import axios from "axios";

export const CommentContext = createContext();

function CommentContextProvider(props) {
    const initialState = [];
    const [comments, dispatch] = useReducer(rootReducer, initialState);

    const url = `${process.env.REACT_APP_BACKEND_URL}/comments/`;

    const fetchCommentsByVideo = useCallback(videoId => {
        axios.get(url + `?videoId=${videoId}`)
            .then(res => {
                const data = res.data;
                dispatch({type: "STORE_COMMENTS", data})
            });
    }, [url]);

    const sendComment = (id, comment) => {
        axios.post(url + `?videoId=${id}`, comment)
            .then(res => {
                const data = res.data;
                dispatch({type: "CHANGE_COMMENTS", data})
            });
    };

    const updateComment = (id, comment) => {
        axios.put(url + id , comment)
            .then(res => {
                const data = res.data;
                dispatch({type: "UPDATE_COMMENTS", data})
            });
    };

    const deleteComment = (id) => {
        axios.delete(url + id)
            .then(() =>
                dispatch({type: "DELETE_COMMENT", id})
            );
    };

    return (
        <CommentContext.Provider value={{comments, dispatch, fetchCommentsByVideo, sendComment, updateComment, deleteComment}}>
            {props.children}
        </CommentContext.Provider>
    );
}

export default CommentContextProvider;