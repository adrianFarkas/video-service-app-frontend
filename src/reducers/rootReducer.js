const rootReducer = (state, action) => {
    switch (action.type) {
        case "STORE_VIDEOS":
            return {
                ...state,
                videos: action.data
            };
        case "STORE_ACT_VIDEO":
            return {
                ...state,
                selectedVideo: action.data
            };
        case "CHANGE_RECOMMENDATIONS":
            return {
                ...state,
                selectedVideo: {...state.selectedVideo, recommendations: action.data}
            };
        default:
            return state;

    }
};

export default rootReducer;