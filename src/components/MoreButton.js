import React, {useState} from 'react';
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {makeStyles} from "@material-ui/styles";
import Menu from "@material-ui/core/Menu";
import Fade from "@material-ui/core/Fade";

function MoreButton(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const {style, color} = props;

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const useStyle = makeStyles({
        root: {
            color: color,
        },
    });

    const classes = useStyle();

    return (
        <div style={style}>
            <IconButton className={classes.root} onClick={handleClick}>
                <MoreVertIcon/>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
            >
                {props.children}
            </Menu>
        </div>
    );
}

export default MoreButton;
