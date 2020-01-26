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
        case "UPDATE_COMMENTS":
            const updated = action.data;
            state.map(c => c.id === updated.id ? c.comment = updated.comment: c);
            return [
                ...state
            ];
        default:
            return state;

    }
};

export default rootReducer;