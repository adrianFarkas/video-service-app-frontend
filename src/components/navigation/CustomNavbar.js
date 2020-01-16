import React, {useContext, useState} from 'react';
import styled, {createGlobalStyle} from "styled-components";
import {Link} from "react-router-dom";
import SlideMenu from "./SlideMenu";
import Avatar from "@material-ui/core/Avatar";
import {ThemeContext} from "../../contexts/ThemeContext";
import {AuthContext} from "../../contexts/AuthContext";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import AuthButton from "../auth/AuthButton";
import {colors} from "../../theme";

function CustomNavbar() {

    const [open, setOpen] = useState(false);
    const {theme} = useContext(ThemeContext);
    const {logOut, userData} = useContext(AuthContext);

    const GlobalStyle = createGlobalStyle`
        body {
          background-color: ${theme.background} !important;
        }
    `;

    const Wrapper = styled.div`
        padding-bottom: 62px;
    `;

    const Navbar = styled.div`
      position: fixed;
      background-color: white;
      top: 0;
      width: 100%;
      box-shadow: 1px 1px 4px 0 rgba(0,0,0,0.51);
      z-index: 3;
     
    `;

    const Toggler = styled.input`
      display: none;
      :checked ~ .menu {
        max-height: 240px;
      };
    `;

    const ItemContainer = styled.div`
      margin: 0;
      padding: 0;
      list-style: none;
      overflow: hidden;
      text-align: center;
      clear: ${userData ? "none" : "both"};
      float: ${userData ? "right" : "unset"};
      max-height: ${userData ? "none" : "0"};
      transition: max-height .3s ease-in-out 0s;
      @media (min-width: 480px) {
        clear: none;
        float: right;
        max-height: none;
      }
    `;

    const Item = styled.div`
      padding: 12px;
      display: ${userData ? "none" : "block"};
      @media (min-width: 480px) {
        float: left;
        width: 140px;
      }
    `;

    const CustomLink = styled(Link)`
      padding: 2px;
      float: left;
      display: block;
    `;

    const Label = styled.label`
        float: right;
        padding: 28px 20px;
        position: relative;
        margin: 0;
        cursor: pointer;
        display: ${userData ? "none" : "unset"};
        @media (min-width: 480px) {
          display: none;
        }  
    `;

    const Hamburger = styled.div`
      background: #333;
      display: block;
      height: 2px;
      width: 18px;
      position: relative;
      :before, :after {
          background: #333;
          content: "";
          display: block;
          height: 100%;
          width: 100%;
          position: absolute;
          top: -6px;
      }
      :after {
          top: 6px;
      }
    `;

    const AvatarToggler = styled.div`
        padding: 10px; 
        float: left;
        display: ${userData ? "block" : "none"};
        :hover {
           cursor: pointer;
        }
`

    const toggleDrawer = (open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(open);
    };

    const getAvatar = () => {
        if (userData) {
            const {firstName, profileImg} = userData;
            if (profileImg)
                return (<Avatar src={profileImg}/>);
            return (<Avatar>{firstName.charAt(0)}</Avatar>);
        }
    };

    return (
        <div>
            <GlobalStyle/>
            <Wrapper>
                <Navbar>
                    <CustomLink to={"/"}>
                        <img src="/img/logo.png" alt={"logo"} width={"100px"}/>
                    </CustomLink>
                    <Toggler type={"checkbox"} id={"toggler"}/>
                    <Label htmlFor={"toggler"}><Hamburger className={"hamburger"}/></Label>
                    <ItemContainer className={"menu"}>
                        <Item id={"login-btn"}>
                            <AuthButton
                                url={"/sign-in"}
                                color={colors.claret}
                                text={"Login"}
                                IconComponent={<LockOpenIcon/>}
                            />
                        </Item>
                        <Item id={"reg-btn"}>
                            <AuthButton
                                url={"/sign-up"}
                                background={colors.claret}
                                text={"Sign Up"}
                                IconComponent={<PersonOutlineIcon/>}
                            />
                        </Item>
                        <AvatarToggler onClick={toggleDrawer(true)}>
                            {getAvatar()}
                        </AvatarToggler>
                    </ItemContainer>
                </Navbar>
            </Wrapper>
            <SlideMenu
                open={open}
                toggleDrawer={toggleDrawer}
                handleLogOut={logOut}
            />
        </div>
    );
}

export default CustomNavbar;