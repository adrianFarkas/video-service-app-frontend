import React, {createRef, useContext, useState} from 'react';
import styled, {createGlobalStyle} from "styled-components";
import {Link} from "react-router-dom";
import SlideMenu from "./SlideMenu";
import {ThemeContext} from "../../contexts/ThemeContext";
import {AuthContext} from "../../contexts/AuthContext";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import AuthButton from "../auth/AuthButton";
import UserAvatar from "../util/UserAvatar";
import Logo from "../util/Logo";

function CustomNavbar() {

    const [open, setOpen] = useState(false);
    const {theme} = useContext(ThemeContext);
    const {isLoggedIn, userData, logOut} = useContext(AuthContext);

    const inputRef = createRef();

    const GlobalStyle = createGlobalStyle`
        body {
          background-color: ${theme.background} !important;
        }
        ::-webkit-scrollbar {
            width: 2px;
            background: ${theme.cardBg};
            margin-top: 62px;
        }
        
        ::-webkit-scrollbar-thumb {
            background: ${theme.transparentSyntax};
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background: ${theme.syntax};
        }
    `;

    const Wrapper = styled.div`
        padding-bottom: 62px;
    `;

    const Navbar = styled.div`
      position: fixed;
      background-color: ${theme.navBg};
      top: 0;
      width: 100%;
      box-shadow: 0 1px 2px 0 rgba(0,0,0,0.5);
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
      clear: ${isLoggedIn ? "none" : "both"};
      float: ${isLoggedIn ? "right" : "unset"};
      max-height: ${isLoggedIn ? "none" : "0"};
      transition: max-height .3s ease-in-out 0s;
      @media (min-width: 550px) {
        clear: none;
        float: right;
        max-height: none;
      }
    `;

    const Item = styled.div`
      padding: 12px;
      display: ${isLoggedIn ? "none" : "block"};
      @media (min-width: 550px) {
        float: left;
        width: 140px;
      }
    `;

    const CustomLink = styled(Link)`
      padding: 3px;
      height: 55px;
      float: left;
      display: block;
    `;

    const Label = styled.label`
        float: right;
        padding: 28px 20px;
        position: relative;
        margin: 0;
        cursor: pointer;
        display: ${isLoggedIn ? "none" : "unset"};
        @media (min-width: 550px) {
          display: none;
        }  
    `;

    const Hamburger = styled.div`
      background: ${theme.syntax};
      display: block;
      height: 2px;
      width: 18px;
      position: relative;
      :before, :after {
          background: ${theme.syntax};
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
        display: ${isLoggedIn ? "block" : "none"};
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

    const closeNavbar = () => {
        const input = inputRef.current;
        input.checked = false;
    };

    return (
        <div>
            <GlobalStyle/>
            <Wrapper>
                <Navbar>
                    <CustomLink to={"/"}>
                        <Logo/>
                    </CustomLink>
                    <Toggler type={"checkbox"} id={"toggler"} ref={inputRef}/>
                    <Label htmlFor={"toggler"}><Hamburger className={"hamburger"}/></Label>
                    <ItemContainer className={"menu"}>
                        <Item id={"login-btn"} onClick={closeNavbar}>
                            <AuthButton
                                url={"/sign-in"}
                                text={"Login"}
                                IconComponent={<LockOpenIcon/>}
                            />
                        </Item>
                        <Item id={"reg-btn"} onClick={closeNavbar}>
                            <AuthButton
                                url={"/sign-up"}
                                text={"Sign Up"}
                                IconComponent={<PersonOutlineIcon/>}
                            />
                        </Item>
                        <AvatarToggler onClick={toggleDrawer(true)}>
                            <UserAvatar user={isLoggedIn && userData}/>
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