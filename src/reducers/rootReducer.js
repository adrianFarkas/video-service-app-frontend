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
        case "STORE_COMMENTS":
            return [
                ...action.data
            ];
        case "CHANGE_COMMENTS":
            return [
                ...action.data
            ];
        case "SWITCH_THEME":
            return {
                ...state,
                isLightTheme: action.checked
            };
        case "UPDATE_COMMENTS":
            const comments = state.filter(r => r.id !== action.data.id);

            return [
                action.data,
                ...comments
            ];
        default:
            return state;

    }
};

export default rootReducer;