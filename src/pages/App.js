import React, {useContext} from 'react';
import VideoLinkSection from "../components/VideoLinkSection";
import {light, dark} from "../theme";
import {RootContext} from "../contexts/RootContext";
import Navbar from "../components/Navbar";

function App() {
    const {state} = useContext(RootContext);
    const {isLightTheme} = state;
    const theme = isLightTheme ? light : dark;
    document.body.style.backgroundColor = theme.background;

    return (
        <div className="App">
            <Navbar/>
            <h1 className="title">Netflix--</h1>
            <VideoLinkSection/>
        </div>
    );
}

export default App;
