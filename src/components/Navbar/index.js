import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  HamburgerIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavButton,
  NavButtonLink,
} from "./NavbarElements.styled";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            LOGO
          </NavLogo>
          <HamburgerIcon onClick={toggle}>
            <FaBars />
          </HamburgerIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">ABOUT</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="community">COMMUNITY</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="location">LOCATION</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="ourmenu">OUR MENU</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="recipes">RECIPES</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">CONTACT</NavLinks>
            </NavItem>
          </NavMenu>
          <NavButton>
            <NavButtonLink to="login">LOGIN</NavButtonLink>
          </NavButton>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
