import React, {useContext, useEffect} from 'react';
import VideoLinkSection from "../components/video/VideoLinkSection";
import {RootContext} from "../contexts/RootContext";
import {ThemeProvider} from "styled-components";
import {ThemeContext} from "../contexts/ThemeContext";

function App() {
    const {fetchAllVideos} = useContext(RootContext);
    const {theme} = useContext(ThemeContext);

    useEffect(() => {
        fetchAllVideos();
    }, [fetchAllVideos]);

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <VideoLinkSection/>
            </div>
        </ThemeProvider>
    );
}

export default App;
