import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => props.bg || "#e67e22"};
  color: ${(props) => props.color || "white"};
  padding-top: ${(props) => props.paddingTop || "0.5rem"};
  padding-bottom: ${(props) => props.paddingBottom || "0.5rem"};
  padding-left: ${(props) => props.paddingLeft || "2rem"};
  padding-right: ${(props) => props.paddingRight || "2rem"};
  border-radius: 10px;
  border: ${(props) => props.border || "none"};
  font-size: ${(props) => props.fontsize || "1rem"};
  text-align: center;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: ${(props) => props.bgHover || "#767676"};
    color: ${(props) => props.colorHover || "#e67e22"};
    transform: scale(1.05);
  }
`;
