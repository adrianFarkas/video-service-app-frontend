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
        case "SWITCH_THEME":
            return {
                ...state,
                isLightTheme: action.checked
            };
        case "UPDATE_RECOMMENDATION":
            const recommendations = state.selectedVideo.recommendations.filter(r => r.id !== action.data.id);

            return {
                ...state,
                selectedVideo: {
                    ...state.selectedVideo,
                    recommendations: [...recommendations, action.data]
                }
            };
        default:
            return state;

    }
};

export default rootReducer;