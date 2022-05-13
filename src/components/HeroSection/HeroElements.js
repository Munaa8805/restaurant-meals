import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #fdf2e9;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #000;
  height: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
  @media screen and (max-width: 1200px) {
    padding-top: 10px;
    height: 760px;
  }
  @media screen and (max-width: 992px) {
    padding-top: 10px;
    // height: 660px;
    flex-direction: column;
  }
`;
export const HeroTextBanner = styled.div`
  padding-left: 3rem;
  @media screen and (max-width: 992px) {
    padding-right: 2rem;
  }
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
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const HeroH1 = styled.h1`
  color: #000;
  font-size: 3rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 992px) {
    font-size: 2rem;
  }
  @media screen and (max-widht: 768px) {
    font-size: 1.5rem;
  }
`;
export const HeroP = styled.p`
  margin-bottom: 2rem;
  color: #888;
  font-size: 1.5rem;
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
  height: 100%;
  object-fit: fill;
`;
