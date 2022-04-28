import styled from "styled-components";

export const LogosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background: green;
  padding: 40px 0;
`;
export const LogoH2 = styled.h2`
  font-size: 2rem;
  color: #333;
  padding: 20px 0;
`;

export const LogoContainerWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const LogoWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const LogoImg = styled.img`
  height: 30px;
  margin: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;
