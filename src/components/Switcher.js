import React, {useContext, useState} from 'react';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import {RootContext} from "../contexts/RootContext";

function Switcher(props) {
    const {state, dispatch} = useContext(RootContext);
    const [checked, setChecked] = useState(state.isLightTheme);

    const handleChange = event => {
        const checked = event.target.checked;
        setChecked(checked);
        dispatch({type: "SWITCH_THEME", checked});
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

export default Switcher;