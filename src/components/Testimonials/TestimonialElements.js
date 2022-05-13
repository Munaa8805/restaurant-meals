import styled from "styled-components";

export const TestimonialContainer = styled.div`
  background: #fdf2e9;
  width: 100%;
  padding: 2rem 0;
`;
export const TestimonialWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 60px;
  @media screen and (max-width: 996px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
export const TestimonialWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TitleH1 = styled.h1`
  color: #e67e22;
  font-size: 2rem;
  margin-bottom: 1rem;
  @media screen and (max-width: 960px) {
    text-align: center;
  }
`;
export const TitleH3 = styled.h3`
  color: #767676;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  @media screen and (max-width: 960px) {
    text-align: center;
  }
`;
export const VisitersWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
export const MealPictureWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
`;
