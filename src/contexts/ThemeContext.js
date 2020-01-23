import React, {createContext, useState} from 'react';
import {def, themes} from "../theme";
import Cookies from "universal-cookie";

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
    const cookie = new Cookies();
    const themeName = cookie.get("theme");
    const [theme, setTheme] = useState(themeName ? themes[themeName].scheme : def);

    const changeTheme = (name, theme) => {
        const expire = new Date();
        expire.setFullYear(expire.getFullYear() + 1);
        cookie.set("theme", name, { path: '/', expires: expire});
        setTheme(theme);
    };

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;