import React from 'react';
import Avatar from "@material-ui/core/Avatar";

function UserAvatar({user, className}) {

    if (user) {
        const {profileImg, firstName} = user;
        if (profileImg) {
            return <Avatar className={className} src={profileImg}/>
        } else if (firstName.length > 0) {
            return <Avatar className={className}>{firstName.charAt(0)}</Avatar>
        }
    }
    return <Avatar src={"/img/avatar.png"} className={className}/>;
}

export default UserAvatar;