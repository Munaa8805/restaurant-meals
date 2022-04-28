import React from "react";
import img1 from "../../assets/logos/techcrunch.png";
import img2 from "../../assets/logos/business-insider.png";
import img3 from "../../assets/logos/the-new-york-times.png";
import img4 from "../../assets/logos/forbes.png";
import img5 from "../../assets/logos/usa-today.png";
import {
  LogosContainer,
  LogoH2,
  LogoWrapper,
  LogoImg,
  LogoContainerWrap
} from "./LogosElements";
const AllLogo = () => {
  return (
    <LogosContainer>
      <LogoH2>As featured in</LogoH2>
      <LogoContainerWrap>
        <LogoWrapper>
          <LogoImg src={img1} alt="Techcrunch logo" />
          <LogoImg src={img2} alt="Business Insider logo" />
          <LogoImg src={img3} alt="The New York Times logo" />
          <LogoImg src={img4} alt="Forbes logo" />
          <LogoImg src={img5} alt="USA Today logo" />
        </LogoWrapper>
      </LogoContainerWrap>
    </LogosContainer>
  );
};

export default AllLogo;
