import styled from "styled-components";

export const AllrecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  padding-top: 50px;
  background: #d9d9d9;
  h3 {
    color: #e67e22;
    font-size: 2rem;
  }
  h1 {
    color: #000;
    font-size: 2.5rem;
  }
  @media screen and (max-width: 768px) {
    h3 {
      padding: 0;
      margin: 0;
    }
    h1 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
  }
`;
export const AllrecipeWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 1rem;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const AllrecipeCard = styled.div`
  background: #fff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  height: 600px;
  // align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    transform: translateY(-1.1rem);
    transition: all 0.3s ease-in-out;
  }

  img {
    height: 250px;
    width: 100%;
    margin-bottom: 1rem;
  }
  p {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 50px;
    font-size: 1rem;
  }
  h1 {
    font-size: 1.8rem;
    padding-left: 50px;
  }
`;
export const CategorySpan = styled.span`
  font-size: 1rem;
  color: #fff;
  background: green;
  border-radius: 10px;
  padding: 5px 10px;
  padding-left: 50px;
`;

export const RecipeCategory = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 1rem;
    padding: 0;
    margin-top: 5px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;
export const TitleH3 = styled.h3`
  font-size: 1.5rem;
  text-align: center;
`;
export const DivContainer = styled.div`
  margin-top: 60px;
  transition: all 0.3s ease-in-out;
  span {
    color: #e67e22;
    border-bottom: 2px solid #e67e22;
    font-size: 2rem;
    &:hover {
      border-bottom: none;
    }
  }
  &:hover {
    transform: translateY(-0.5rem);
    cursor: pointer;
  }
`;
