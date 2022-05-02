import React from "react";
import { Button } from "../ButtonElement";
import {
  ContactContainer,
  ContactWrapper,
  ContactInformation,
  ContactH1,
  ContactDescription,
  ContactInformationWrapper,
  ContactOne,
  ContactLabel,
  ContactInput,
  Select,
  ImageContainer,
  Image
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
            <ContactOne>
              <div>
                <ContactLabel>Full Name</ContactLabel>
                <ContactInput placeholder="Ta name"></ContactInput>
              </div>
              <div>
                <ContactLabel>Where did you hear from us?</ContactLabel>
                <Select required>
                  <option value="">Please choose one option:</option>
                  <option value="friends">Friends and family</option>
                  <option value="youtube">YouTube video</option>
                  <option value="podcast">Podcast</option>
                  <option value="ad">Facebook ad</option>
                  <option value="others">Others</option>
                </Select>
              </div>
            </ContactOne>
            <ContactOne>
              <div>
                <ContactLabel>Email address</ContactLabel>
                <ContactInput placeholder="example@example.com"></ContactInput>
              </div>
              <div>
                <Button>Button</Button>
              </div>
            </ContactOne>
          </ContactInformationWrapper>
        </ContactInformation>
        <ImageContainer>
          <Image src={ContactImage} />
        </ImageContainer>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
