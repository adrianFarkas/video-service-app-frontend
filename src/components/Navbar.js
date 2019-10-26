import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {colors} from "../theme";
import Switcher from "./Switcher";
import SlideMenu from "./SlideMenu";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        marginBottom: 100,
        "& .MuiToolbar-root": {
            backgroundColor: colors.white2,
            color: colors.darkerGrey,
        },
        "& .MuiAppBar-colorPrimary": {
            backgroundColor: colors.white2,
        }
    },
    menuButton: {
        margin: 5,
    },
    title: {
        flexGrow: 1,
    },
    logo: {
        maxWidth: 160,
        maxHeight: 56,
    },
});

export default function Navbar() {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(open);
    };

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <Link to={"/"} className={classes.title}>
                        <img src="/img/logo.png" alt="logo" className={classes.logo}/>
                    </Link>
                    <Button color="inherit">Login</Button>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                                onClick={toggleDrawer(true)}>
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
