import styled from "styled-components";

export const SearchContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  form {
    width: 600px;
    input {
      width: 100%;
      padding: 1rem 2rem;
      font-size: 1rem;
      border-radius: 10px;
      border: 1px solid #e67e22;
    }
    @media screen and (max-width: 720px) {
      width: 500px;
    }
    @media screen and (max-width: 540px) {
      width: 350px;
    }
  }
`;
