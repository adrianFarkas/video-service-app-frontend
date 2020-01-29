import React, {createContext, useReducer, useCallback} from 'react';
import rootReducer from "../reducers/rootReducer";
import axios from "axios";

export const RootContext = createContext();

function RootContextProvider(props) {
    const initialState = {
            videos: [],
            selectedVideo: {},
        };

    const baseUrlVideo = "/videos/";

    const [state, dispatch] = useReducer(rootReducer, initialState);

    const fetchAllVideos = useCallback(() => {
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

    return (
        <RootContext.Provider value={{state, dispatch, fetchAllVideos, fetchVideoById}}>
            {props.children}
        </RootContext.Provider>
    );
}

export default RootContextProvider;