import styled from "styled-components";

export const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  max-width: 250px;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  &:hover {
    transform: translateY(-1.05rem);
    transition: all 0.3s ease-in-out;
  }
`;
export const ContainerImage = styled.div`
  img {
    height: 200px;
    width: 100%;
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  @media screen and (max-width: 540px) {
    height: 100%;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    text-align: center;
    width: 100%;
    margin-bottom: 1rem;
  }
  li {
    display: block;
    margin-bottom: 1rem;
    span {
      font-weight: bold;
    }
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  padding: 0 1rem;
  justify-content: center;
  width: 100%;
  padding: 0.5rem 1rem;
  background: #e67e22;
  font-size: 1.2rem;
  border: none;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  a {
    color: white;
    text-decoration: none;
  }
  &:hover {
    background: #cf711f;
  }
`;
