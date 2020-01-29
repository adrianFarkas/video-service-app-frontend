import React, {useState} from 'react';
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {makeStyles} from "@material-ui/styles";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";

function EditMenu({children, color}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

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
        <div>
            <IconButton className={classes.root} size="small" onClick={handleClick}>
                <MoreVertIcon/>
            </IconButton>
            <Popper open={open} anchorEl={anchorEl} transition disablePortal placement={"left-end"}>
                {({ TransitionProps }) => (
                    <Grow {...TransitionProps}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onClick={handleClose}>
                                    {children}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}

export default EditMenu;
