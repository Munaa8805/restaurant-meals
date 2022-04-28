import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroTextBanner,
  Img,
  BtnWrapper,
  BtnDiv
} from "./HeroElements";
import { Button } from "../ButtonElement";
import BannerImg from "../../assets/hero-min.png";
const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroTextBanner>
        <HeroH1>A healthy meal delivered to your door, every single day</HeroH1>
        <HeroP>
          The smart 365-days-per-year food subscription that will make you eat
          healthy again. Tailored to your personal tastes and nutritional needs.
        </HeroP>
        <BtnWrapper>
          <BtnDiv>
            <Button primary>Start eating well</Button>
          </BtnDiv>
          <BtnDiv left>
            <Button primary>Learn more ↓</Button>
          </BtnDiv>
        </BtnWrapper>
      </HeroTextBanner>
      <HeroContent>
        <Img src={BannerImg} alt="hero banner" />
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
