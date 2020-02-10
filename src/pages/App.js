import React, {useContext, useEffect} from 'react';
import VideoLinkSection from "../components/video/VideoLinkSection";
import {RootContext} from "../contexts/RootContext";

function App() {
    const {fetchAllVideos} = useContext(RootContext);

    useEffect(() => {
        fetchAllVideos();
    }, [fetchAllVideos]);

    return (
        <div className="App">
            <VideoLinkSection/>
        </div>
    );
}

export default App;
