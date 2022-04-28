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
  @media screen and (max-width: 960px) {
    text-align: center;
  }
`;
export const TestimonialImg = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: 2px solid #e67e22;
  background-size: cover;
  @media screen and (max-width: 960px) {
    align-self: center;
  }
`;
