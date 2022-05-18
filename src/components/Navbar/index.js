import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

import { LogoMain } from "../../data";
import AuthContext from "../../context/auth-context";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  Img
} from "./NavbarElements";

////
const Navbar = ({ toggle }) => {
  const authCtx = useContext(AuthContext);
  const isLogin = authCtx.isLogin;
  const history = useHistory();

  const logoutHandler = () => {
    authCtx.logout();
    history.push("/");
  };

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
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <Img src={LogoMain[0].image} alt="main logo" />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars color="#e67e22" />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-60}
                >
                  How it works
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="meals"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-60}
                >
                  Meals
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="testimonials"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-60}
                >
                  Testimonials
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="price"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-60}
                >
                  Price
                </NavLinks>
              </NavItem>
              {!isLogin && (
                <NavBtn>
                  <NavBtnLink to="/auth">Account</NavBtnLink>
                </NavBtn>
              )}
              {isLogin && (
                <NavBtn>
                  <button onClick={logoutHandler}>Logout</button>
                </NavBtn>
              )}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
