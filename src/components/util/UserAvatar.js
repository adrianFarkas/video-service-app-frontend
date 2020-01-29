import React, {useContext} from 'react';
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core";
import {ThemeContext} from "../../contexts/ThemeContext";

function UserAvatar({user, className}) {
    const {theme} = useContext(ThemeContext);

    const useStyle = makeStyles({
        root: {
            border: `2px solid ${theme.syntax}`,
        }
    });
    const classes = useStyle();

    if (user) {
        const {profileImg, firstName} = user;
        if (profileImg) {
            return <Avatar className={`${className} ${classes.root} transition`} src={profileImg}/>
        } else if (firstName.length > 0) {
            return <Avatar className={`${className} ${classes.root} transition`}>{firstName.charAt(0)}</Avatar>
        }
    }
    return <Avatar src={"/img/avatar.png"} className={className}/>;
}

export default UserAvatar;