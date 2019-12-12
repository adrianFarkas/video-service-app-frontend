import React, {createContext, useState} from 'react';
import {dark, light} from "../theme";
import Cookies from "universal-cookie";

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
    const cookie = new Cookies();
    const cookieTheme = cookie.get("theme");
    const [theme, setTheme] = useState(cookieTheme === "true" ? light : dark);

    const changeTheme = () => {
        const isDark = theme === dark;
        cookie.set("theme", isDark, { path: '/', expires: new Date("2020-12-08T21:30:03.897Z") });
        setTheme(isDark ? light : dark);
    };

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;