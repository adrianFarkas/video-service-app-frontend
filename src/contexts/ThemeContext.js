import React, {createContext, useState} from 'react';
import {dark, light} from "../theme";

export const ThemeContext = createContext();

function ThemeContextProvider(props) {

    const [theme, setTheme] = useState(dark);

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