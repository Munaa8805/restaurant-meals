import React from "react";
import { Button } from "../Button";
import {
  ContactContainer,
  ContactWrapper,
  ContactInformation,
  ContactH1,
  ContactDescription,
  ContactInformationWrapper,
  ContactLabel,
  ContactInput,
  Select,
  Div,
  ImageContainer,
  Image,
  Form,
  BtnWrapper
} from "./ContactElements";
import ContactImage from "../../assets/eating.jpg";
const Contact = () => {
  return (
    <ContactContainer>
      <ContactWrapper>
        <ContactInformation>
          <ContactH1>Get your first meal for free!</ContactH1>
          <ContactDescription>
            Healthy, tasty and hassle-free meals are waiting for you. Start
            eating well today. You can cancel or pause anytime. And the first
            meal is on us!
          </ContactDescription>
          <ContactInformationWrapper>
            <Form>
              <Div>
                <ContactLabel>Full Name</ContactLabel>
                <ContactInput
                  type="text"
                  placeholder=" Your name"
                  required
                ></ContactInput>
              </Div>

              <Div>
                <ContactLabel>Email address</ContactLabel>
                <ContactInput
                  type="email"
                  placeholder=" example@example.com"
                  required
                ></ContactInput>
              </Div>
              <Div>
                <ContactLabel>Where did you hear from us?</ContactLabel>
                <Select required>
                  <option value="">Please choose one option:</option>
                  <option value="friends">Friends and family</option>
                  <option value="youtube">YouTube video</option>
                  <option value="podcast">Podcast</option>
                  <option value="ad">Facebook ad</option>
                  <option value="others">Others</option>
                </Select>
              </Div>
              <BtnWrapper>
                <Button
                  bg="#45260a"
                  fontsize="1.2rem"
                  bgHover="#fff"
                  colorHover="#e67e22"
                >
                  Sign Up
                </Button>
              </BtnWrapper>
            </Form>
          </ContactInformationWrapper>
        </ContactInformation>
        <ImageContainer>
          <Image src={ContactImage} alt="women eating" />
        </ImageContainer>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
