import styled from "styled-components";

export const TestimonialCardContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TestimonialName = styled.h2`
  color: #333;
  font-size: 1.5rem;
  @media screen and (max-width: 960px) {
    text-align: center;
  }
`;
export const TestimonialDescription = styled.p`
  color: #333;
  font-size: 1rem;
  margin-bottom: 1rem;
  @media screen and (max-width: 960px) {
    text-align: center;
  }
`;
export const TestimonialImg = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 2px solid #e67e22;
  background-size: cover;
  margin-bottom: 1rem;
  @media screen and (max-width: 960px) {
    align-self: center;
  }
`;
