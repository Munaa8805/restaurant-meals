import React from "react";
import {
  TestimonialCardContent,
  TestimonialName,
  TestimonialDescription,
  TestimonialImg
} from "./TestimonialCardElements";
const TestimonialCard = ({ data }) => {
  // console.log("name", data.name);
  return (
    <TestimonialCardContent>
      <TestimonialImg src={data.image} alt="testimonial image" />
      <TestimonialDescription>{data.description}</TestimonialDescription>
      <TestimonialName>&mdash; {data.name}</TestimonialName>
    </TestimonialCardContent>
  );
};

export default TestimonialCard;
