import React, {createContext, useReducer, useEffect, useCallback} from 'react';
import rootReducer from "../reducers/rootReducer";
import axios from "axios";

export const RootContext = createContext();

function RootContextProvider(props) {
    const initialState = {
            videos: [],
            selectedVideo: {},
        };

    const baseUrlVideo = "http://localhost:8080/videos/";
    const baseUrlRecommendations = "http://localhost:8080/recommendations/";

    const [state, dispatch] = useReducer(rootReducer, initialState);

    useEffect(() => {
        axios.get(baseUrlVideo)
            .then(res => {
                const data = res.data;
                dispatch({type: "STORE_VIDEOS", data})
            });
    }, []);


    const fetchVideoById = useCallback(id => {
        axios.get(baseUrlVideo + id)
            .then(res => {
                const data = res.data;
                dispatch({type: "STORE_ACT_VIDEO", data})
            });
    }, []);

    const sendRecommendation = (id, recommendation) => {
        axios.post(baseUrlRecommendations + `?videoId=${id}`, recommendation)
            .then(res => {
                const data = res.data;
                dispatch({type: "CHANGE_RECOMMENDATIONS", data})
            });
    };

    const updateRecommendation = (id, recommendation) => {
        axios.put(baseUrlRecommendations + id , recommendation)
            .then(res => {
                const data = res.data;
                dispatch({type: "UPDATE_RECOMMENDATION", data})
            });
    };

    return (
        <RootContext.Provider value={{state, dispatch, fetchVideoById, sendRecommendation, updateRecommendation}}>
            {props.children}
        </RootContext.Provider>
    );
}

export default RootContextProvider;