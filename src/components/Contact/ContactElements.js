import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 20px 0;
`;
export const ContactWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(to right bottom, #eb984e, #e67e22);
  border-radius: 10px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  overflow: hidden;
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.15);
  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;
export const ContactInformation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;
export const ContactH1 = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  @media screen and (max-width: 576px) {
    font-size: 1.5rem;
  }
`;
export const ContactDescription = styled.p`
  font-size: 1.5rem;
  padding-bottom: 2rem;
  line-height: 2rem;
  @media screen and (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

/////
export const ContactInformationWrapper = styled.div`
  display: block;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3.2rem;
  row-gap: 2.4rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  } ;
`;
export const Div = styled.div`
  width: 100%;
`;
export const ContactLabel = styled.label`
  font-size: 1.2rem;
  display: block;
  margin-bottom: 0.5rem;
`;
export const ContactInput = styled.input`
  font-size: 1rem;
  display: block;
  margin-bottom: 2rem;
  padding: 0.5rem 0rem;
  width: 100%;
  border-radius: 10px;
  border: none;
  &:active {
    border: none;
  }
`;

export const Select = styled.select`
  font-size: 1rem;
  display: block;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  width: 100%;
  &:active {
    border: none;
  }
  &: hover {
    cursor: pointer;
  }
`;

export const BtnWrapper = styled.div`
  display: grid;
  align-items: center;
  button {
    align-self: center;
  }
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  opacity: 0.8;
  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;
