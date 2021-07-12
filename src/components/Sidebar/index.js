import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  LoginBtnWrap,
  LoginBtnRoute,
} from "./SidebarElements.styled";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>ABOUT</SidebarLink>
          <SidebarLink to="community" onClick={toggle}>COMMUNITY</SidebarLink>
          <SidebarLink to="location" onClick={toggle}>LOCATION</SidebarLink>
          <SidebarLink to="ourmenu" onClick={toggle}>OUR MENU</SidebarLink>
          <SidebarLink to="recipes" onClick={toggle}>RECIPES</SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>CONTACT</SidebarLink>
        </SidebarMenu>
        <LoginBtnWrap>
          <LoginBtnRoute to="/login">Login</LoginBtnRoute>
        </LoginBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
