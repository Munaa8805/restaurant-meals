import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  padding: 4rem 0;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
  @media screen and (max-width: 768px) {
    padding: 10px 0;
  }
`;
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  // justify-content: space-between;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;
export const TopLine = styled.p`
  color: #999;
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 3rem;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8Fa" : "#010606")};
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
export const Subtitle = styled.p`
  width: 100%;
  margin-bottom: 2rem;
  text-align: justify;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const ImgWrap = styled.div`
  width: 100%;
  dipslay: flex;
  flex-direction: row;
  height: 100%;
  text-align: ${({ imgCenter }) => (imgCenter ? "center" : "")};
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
export const Img = styled.img`
  width: 200px;
  height: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
