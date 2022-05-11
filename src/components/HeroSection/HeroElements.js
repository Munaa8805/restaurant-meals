import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #fdf2e9;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #000;
  height: 960px;
  padding-top: 60px;
  @media screen and (max-width: 1200px) {
    padding-top: 10px;
    height: 760px;
  }
  @media screen and (max-width: 992px) {
    padding-top: 10px;
    height: 660px;
    flex-direction: column;
  }
`;
export const HeroTextBanner = styled.div`
  padding-left: 60px;
`;
export const BtnWrapper = styled.div`
  display: flex;
`;
export const BtnDiv = styled.div`
  margin-left: ${({ left }) => (left ? "20px" : "0")}
  }
`;
export const HeroContent = styled.div`
  padding-right: 40px;
  padding-left: 40px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeroH1 = styled.h1`
  color: #000;
  font-size: 48px;

  @media screen and (max-width: 992px) {
    font-size: 40px;
  }
  @media screen and (max-widht: 768px) {
    font-size: 1.5rem;
  }
`;
export const HeroP = styled.p`
  margin-top: 24px;
  color: #888;
  font-size: 24px;
  max-width: 600px;
  @media screen and (max-width: 992px) {
    font-size: 22px;
  }
  @media screen and (max-widht: 480px) {
    font-size: 18px;
  }
`;
export const Img = styled.img`
  width: 100%;
`;
