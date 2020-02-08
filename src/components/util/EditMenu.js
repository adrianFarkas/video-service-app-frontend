import React, {useState} from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import {CustomIconButton} from "../../styled-components/styled";

function EditMenu({children}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <CustomIconButton size="small" onClick={handleClick}>
                <MoreVertIcon/>
            </CustomIconButton>
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
