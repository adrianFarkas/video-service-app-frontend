import React from 'react';
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ThemeSwitcher from "./ThemeSwitcher";
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 250,
    },
});

function SlideMenu(props) {
    const classes = useStyles();
    const {open, toggleDrawer} = props;

    const fullList = (
        <div
            className={classes.fullList}
            role="presentation"
            onClick={toggleDrawer(false)}
        >
            <List>
                <ListItem button>
                    <ListItemIcon><AccountCircleIcon/></ListItemIcon>
                    <ListItemText primary={"Profile"} />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem>
                    <ListItemIcon><SettingsBrightnessIcon/></ListItemIcon>
                    <ThemeSwitcher/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                    <ListItemText primary={"Sign In"} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                    <ListItemText primary={"Sign out"} />
                </ListItem>
            </List>
        </div>
    );

    return (
        <div>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                {fullList}
            </Drawer>
        </div>
    );
}

export default SlideMenu;