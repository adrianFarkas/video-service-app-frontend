import React, {useContext, useState} from 'react';
import styled, {createGlobalStyle} from "styled-components";
import {Link} from "react-router-dom";
import LoginButton from "../auth/login/LoginButton";
import RegButton from "../auth/signup/RegButton";
import SlideMenu from "./SlideMenu";
import Avatar from "@material-ui/core/Avatar";
import {ThemeContext} from "../../contexts/ThemeContext";

function CustomNavbar() {

    const [open, setOpen] = useState(false);
    const {theme} = useContext(ThemeContext);

    const GlobalStyle = createGlobalStyle`
        body {
          background-color: ${theme.background};
        }
    `;

    const Wrapper = styled.div`
        margin-bottom: 60px;
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
      clear: both;
      list-style: none;
      overflow: hidden;
      text-align: center;
      max-height: 0;
      transition: max-height .3s ease-in-out 0s;
      @media (min-width: 480px) {
        clear: none;
        float: right;
        max-height: none;
      }
    `;

    const Item = styled.div`
      display: block;
      padding: 10px;
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
        display: block;
        padding: 10px;  
        float: left;
        width: 60px;
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
                        <Item id={"login-btn"}><LoginButton/></Item>
                        <Item id={"reg-btn"}><RegButton/></Item>
                        <AvatarToggler onClick={toggleDrawer(true)}>
                            <Avatar>B</Avatar>
                        </AvatarToggler>
                    </ItemContainer>
                </Navbar>
            </Wrapper>
            <SlideMenu open={open} toggleDrawer={toggleDrawer}/>
        </div>
    );
}

export default CustomNavbar;