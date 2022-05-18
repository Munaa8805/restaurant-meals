import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;
export const Section = styled.section`
  margin: 3rem auto;
  width: 100%;
  max-width: 25rem;
  border-radius: 6px;
  background-color: #e67e22;
  box-shadow: 0 1px 4px grba(0, 0, 0, 0.2);
  padding: 1rem;
  text-align: center;
  h1 {
    text-align: center;
    color: #000;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;
export const Formdiv = styled.div`
  margin-bottom: 1rem;
  label {
    display: block;
    color: #000;
    font-size: 1.2rem;
    font-weight: bold;
    margin-btoom: 0.5rem;
  }
  input {
    font: inherit;
    background: #f1e1fc;
    color: #000;
    font-size: 1rem;
    border-radius: 4px;
    border: 1px solid #fff;
    width: 100%;
    text-align: left;
    padding: 0.5rem;
  }
`;
export const Actiondiv = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    cursor: pointer;
    font: inherit;
    color: #000;
    font-size: 1rem;
    font-weight: bold;
    background-color: #fdf2e9;
    border: 1px solid #767676;
    border-radius: 4px;
    padding: 0.5rem 2.5rem;
    margin-bottom: 1rem;
    &:hover {
      background-color: #cf711f;
      border: none;
      color: #fff;
    }
  }
`;
