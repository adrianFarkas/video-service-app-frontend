import React, {useContext, useState} from 'react';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import {ThemeContext} from "../../contexts/ThemeContext";
import {light} from "../../theme";

function ThemeSwitcher() {
    const {theme, changeTheme} = useContext(ThemeContext);
    const [checked, setChecked] = useState(theme === light);

    const handleChange = event => {
        const checked = event.target.checked;
        setChecked(checked);
        changeTheme();
    };

    return (
        <div>
            <FormControlLabel
                control={
                    <Switch
                        checked={checked}
                        onChange={handleChange}
                        color="default"
                    />
                }
                label={checked ? "Light" : "Dark"}
            />
        </div>
    );
}

export default ThemeSwitcher;