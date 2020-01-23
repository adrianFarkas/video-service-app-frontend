import React, {useContext, useState} from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";
import SettingsIcon from '@material-ui/icons/Settings';
import {ThemeContext} from "../../contexts/ThemeContext";
import {SwipeableDrawer} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Publish from "@material-ui/icons/Publish";
import {Link} from "react-router-dom";
import ThemeSelector from "../util/ThemeSelector";
import PaletteIcon from '@material-ui/icons/Palette';

function SlideMenu(props) {
    const {open, toggleDrawer, handleLogOut} = props;
    const [themeSelector, setThemeSelector] = useState(false);
    const {theme} = useContext(ThemeContext);

    const useStyles = makeStyles({
        root: {
            "& .MuiDrawer-paperAnchorRight": {
                backgroundColor: theme.background,
                color: theme.syntax,
            }
        },
        icon: {
            color: theme.syntax,
            fontSize: "30px",
        },
        closeIcon: {
            color: theme.syntax,
        },
        iconBtn: {
          marginBottom: "5px",
        },
        fullList: {
            width: 270,
        },
    });

    const classes = useStyles();

    const fullList = (
        <div
            className={classes.fullList}
            role="presentation"
            onClick={toggleDrawer(false)}
        >
            <List>
                <IconButton className={classes.iconBtn} onClick={toggleDrawer(false)}>
                    <CloseIcon className={classes.closeIcon}/>
                </IconButton>
                <Divider/>
                <ListItem button>
                    <ListItemIcon><AccountCircleIcon className={classes.icon}/></ListItemIcon>
                    <ListItemText primary={"Profile"} />
                </ListItem>
                <ListItem button component={Link} to={"/upload"}>
                    <ListItemIcon><Publish className={classes.icon}/></ListItemIcon>
                    <ListItemText primary={"Upload"} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon><SettingsIcon className={classes.icon}/></ListItemIcon>
                    <ListItemText primary={"Settings"} />
                </ListItem>
                <ListItem button onClick={() => setThemeSelector(true)}>
                    <ListItemIcon><PaletteIcon className={classes.icon}/></ListItemIcon>
                    <ListItemText primary={"Theme"} />
                </ListItem>
                <Divider/>
                <ListItem button onClick={handleLogOut}>
                    <ListItemIcon><ExitToAppIcon className={classes.icon}/></ListItemIcon>
                    <ListItemText primary={"Logout"} />
                </ListItem>
            </List>
        </div>
    );

    return (
        <div>
            <SwipeableDrawer
                anchor="right"
                open={open}
                className={classes.root}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                {fullList}
            </SwipeableDrawer>
            <ThemeSelector
                open={themeSelector}
                handleClose={() => setThemeSelector(false)}
            />
        </div>
    );
}

export default SlideMenu;