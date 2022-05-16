import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  WebsiteRights,
  Img
} from "./FooterElements";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";
import { LogoMain, footerData } from "../../data";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        {footerData.map((item) => (
          <FooterLinkItems key={item.id}>
            <FooterLinkTitle>{item.title}</FooterLinkTitle>
            <FooterLink to="/">{item.content1}</FooterLink>
            <FooterLink to="/">{item.content2}</FooterLink>
            <FooterLink to="/">{item.content3}</FooterLink>
            <FooterLink to="/">{item.content4}</FooterLink>
            <FooterLink to="/">{item.content5}</FooterLink>
          </FooterLinkItems>
        ))}
      </FooterWrap>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/" onClick={toggleHome}>
            <Img src={LogoMain[0].image} alt="main logo" />
          </SocialLogo>
          <WebsiteRights> @2022 All rights reserved.</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
