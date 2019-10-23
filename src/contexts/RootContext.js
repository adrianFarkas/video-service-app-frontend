import React, {createContext, useReducer, useEffect} from 'react';
import rootReducer from "../reducers/rootReducer";
import axios from "axios";

export const RootContext = createContext();

function RootContextProvider(props) {
    const initialState = {
        videos: [],
        selectedVideo: {},
    };

    const baseUrl = "http://localhost:8762/video-service/video/";

    const [state, dispatch] = useReducer(rootReducer, initialState);

    useEffect(() => {
        axios.get(baseUrl + "list")
            .then(res => {
                const data = res.data;
                dispatch({type: "STORE_VIDEOS", data})
            });
    }, []);

    const fetchVideoById = (id) => {
        axios.get(baseUrl + id)
            .then(res => {
                const data = res.data;
                dispatch({type: "STORE_ACT_VIDEO", data})
            });
    };

    return (
        <RootContext.Provider value={{state, dispatch, fetchVideoById}}>
            {props.children}
        </RootContext.Provider>
    );
}

export default RootContextProvider;