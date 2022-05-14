import styled from "styled-components";

export const AllrecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 4rem;
  padding-top: 3rem;
  background: #d9d9d9;
  h3 {
    color: #e67e22;
    font-size: 2rem;
  }
  h1 {
    color: #000;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    margin-top: 1rem;
  }
  @media screen and (max-width: 992px) {
    padding-left: 1rem;
    padding-right: 1rem;
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
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 2rem;
  @media screen and (max-width: 1300px) {
    padding: 0 1rem;
  }

  @media screen and (max-width: 996px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 576px) {
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
    transform: translateY(-1.05rem);
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
    padding-left: 1rem;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 1.8rem;
    padding-left: 1rem;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 992px) {
    h3 {
      margin-top: 2rem;
    }
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
  margin: 1rem 0;
  @media screen and (max-width: 992px) {
    font-size: 1rem;
  }
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
