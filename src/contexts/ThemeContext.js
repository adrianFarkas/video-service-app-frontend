import React, {createContext, useState} from 'react';
import {dark, light} from "../theme";
import Cookies from "universal-cookie";

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
    const cookie = new Cookies();
    const [theme, setTheme] = useState(JSON.parse(cookie.get("theme")) ? light : dark);

    const changeTheme = () => {
        setTheme(theme === dark ? light : dark);
    };

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;