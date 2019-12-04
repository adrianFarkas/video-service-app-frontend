import React, {useContext} from 'react';
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";
import SettingsIcon from '@material-ui/icons/Settings';
import ThemeSwitcher from "../util/ThemeSwitcher";
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import LoginButton from "../auth/LoginButton";
import RegButton from "../auth/RegButton";
import Avatar from "@material-ui/core/Avatar";
import {ThemeContext} from "../../contexts/ThemeContext";

function SlideMenu(props) {
    const {open, toggleDrawer} = props;
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
                <ListItem button>
                    <ListItemIcon><Avatar alt="Marcika" src="/img/marcika.jpg"/></ListItemIcon>
                    <ListItemText primary={"Profile"} />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button>
                    <ListItemIcon><SettingsIcon className={classes.icon}/></ListItemIcon>
                    <ListItemText primary={"Settings"} />
                </ListItem>
                <ListItem>
                    <ListItemIcon><SettingsBrightnessIcon className={classes.icon}/></ListItemIcon>
                    <ListItemText primary={"Dark Theme:"} />
                    <ThemeSwitcher/>
                </ListItem>
                <Divider />
                <ListItem>
                    <LoginButton/>
                </ListItem>
                <ListItem>
                    <RegButton/>
                </ListItem>
            </List>
        </div>
    );

    return (
        <div>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)} className={classes.root}>
                {fullList}
            </Drawer>
        </div>
    );
}

export default SlideMenu;