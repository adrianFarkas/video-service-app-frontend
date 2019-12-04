import React, {useContext, useState} from 'react';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import {ThemeContext} from "../../contexts/ThemeContext";
import {dark} from "../../theme";
import {makeStyles} from "@material-ui/core";

function ThemeSwitcher() {
    const {theme, changeTheme} = useContext(ThemeContext);
    const [checked, setChecked] = useState(theme === dark);

    const handleChange = event => {
        const checked = event.target.checked;
        setChecked(checked);
        changeTheme();
    };

    const useStyles = makeStyles(() => ({
        root: {
            margin: "2px",
        }
    }));

    return (
        <div>
            <FormControlLabel
                className={useStyles().root}

                control={
                    <Switch
                        checked={checked}
                        onChange={handleChange}
                        color="default"
                    />
                }
                label={checked ? "On" : "Off"}
                labelPlacement="start"
            />
        </div>
    );
}

export default ThemeSwitcher;