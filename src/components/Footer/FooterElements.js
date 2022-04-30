import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;
export const FooterWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-between;
  grid-gap: 1rem;
  // padding: 0 50px;
  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  box-sizing: border-box;
  color: #000;
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 0px;
    width: 100%;
  }
`;
export const FooterLinkTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 16px;
`;
export const FooterLink = styled(Link)`
  color: #555;
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    color: #e67e22;
    transition: 0.3s ease-out;
  }
`;
export const SocialMedia = styled.section`
  max-width: 1200px;
  width: 100%;
  margin-bottom: 1rem;
`;
export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
export const SocialLogo = styled(Link)`
  justify-content: start;
  cursoir: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;
export const WebsiteRights = styled.small`
  color: #555;
  margin-bottom: 16px;
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;
export const SocialIconLink = styled.a`
  color: #e67e22;
  font-size: 24px;
`;
export const Img = styled.img`
  height: 20px;
`;
