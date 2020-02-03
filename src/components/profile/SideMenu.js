import React, {useContext, useState} from 'react';
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpIcon from '@material-ui/icons/Help';
import styled from "styled-components";
import {ThemeContext} from "../../contexts/ThemeContext";
import MenuItem from "./MenuItem";
import {UserContext} from "../../contexts/UserContext";
import {getUserName} from "../../util/util";
import ProfileImgSelector from "../util/ProfileImgSelector";

const Wrapper = styled.div`
    padding-right: 300px;
    z-index: 2;
`;

const Menu = styled.div`
    background-color: ${props => props.background};
    position: fixed;
    width: 300px;
    top: 63px;
    left: 0;
    bottom: 0;
`;

const UserDetails = styled.div`
    padding: 20px;
    color: ${props => props.color};
`;

const ProfilePicture = styled.div`
    width: 200px;
    height: 200px;
    margin: 20px auto;
    position: relative;
    border-radius: 50%;
    color: ${props => props.color};
    border: 2px solid ${props => props.color};
    transition: all .5s;
`;

const ProfImg = styled.img` 
    width: 100%;
    height: 100%;
    border-radius: 50%;
`;

const NoImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  font-size: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #BDBDBD;
  color: #fff;
`;

const ChangeImg = styled.div` 
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    transition: opacity .5s;
    :hover {
        opacity: 1;
        background: ${props => props.transparentBackground};
    }
    & .MuiSvgIcon-root {
      font-size: 50px;
    }
    @media (max-width: 768px) {
        background: ${props => props.cardBg};
        border: 2px solid ${props => props.syntax};
    }
`;

const MenuItems = styled.div`
    ::-webkit-scrollbar {
      display: none;
    }
`;

const Name = styled.div`
  font-size: 25px;
  text-align: center;
`;

function SideMenu(props) {
    const {theme} = useContext(ThemeContext);
    const {userData} = useContext(UserContext);
    const [open, setOpen] = useState(false);

    const image = userData && (
        userData.profileImg ?
            <ProfImg src={userData.profileImg}/>
            :
            <NoImage>{userData.firstName.charAt(0)}</NoImage>
    );


    return (
        <Wrapper id={"profile-menu-wrapper"}>
            <Menu id={"profile-menu"} className={"transition"} background={theme.cardBg}>
                <UserDetails id={"profile-user"} color={theme.syntax}>
                    <ProfilePicture id={"profile-picture"} color={theme.syntax}>
                        {image}
                        <ChangeImg id={"change-picture"} {...theme} onClick={() => setOpen(true)}>
                            <AddAPhotoIcon/>
                        </ChangeImg>
                    </ProfilePicture>
                    <Name>{getUserName(userData)}</Name>
                </UserDetails>
                <MenuItems id={"menu-items"} {...theme}>
                    <MenuItem  name={"videos"} to={"/profile/videos"} text={"My Videos"} IconComponent={VideoLibraryIcon} />
                    <MenuItem name={"settings"} to={"/profile/settings"} text={"Settings"} IconComponent={SettingsIcon} />
                    <MenuItem to={"/profile"} text={"Lorem"} IconComponent={HelpIcon} />
                    <MenuItem to={"/profile"} text={"Lorem"} IconComponent={HelpIcon} />
                </MenuItems>
            </Menu>
            <ProfileImgSelector open={open} handleClose={() => setOpen(false)}/>
        </Wrapper>
    );
}

export default SideMenu;