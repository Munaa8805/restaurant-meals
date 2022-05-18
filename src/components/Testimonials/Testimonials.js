import React, { useReducer, useState, useEffect } from "react";
import {
  TestimonialContainer,
  TestimonialWrapper,
  TestimonialWrap,
  TitleH1,
  TitleH3,
  VisitersWrapper,
  MealPictureWrapper
} from "./TestimonialElements";
import TestimonialCard from "./TestimonialCard";
import TestimonialImg from "./TestimonialImg";
import { testimonialReducer } from "../../store/reducer";
import { testimonial_data, meals_picture } from "../../data";

const Testimonials = () => {
  const [testimonial, setTestimonial] = useState([]);
  const [state, dispatch] = useReducer(testimonialReducer);

  useEffect(() => {
    setTestimonial(testimonial_data);
    dispatch({
      type: "LOADING_TESTIMONIAL"
    });
  }, []);
  return (
    <TestimonialContainer id="testimonials">
      <TestimonialWrapper>
        <TestimonialWrap>
          <TitleH1>Testimonials</TitleH1>
          <TitleH3>Once you try it, you can't go back</TitleH3>
          <VisitersWrapper>
            {testimonial.map((data) => (
              <TestimonialCard data={data} key={data.id} />
            ))}
          </VisitersWrapper>
        </TestimonialWrap>
        <TestimonialWrap>
          <MealPictureWrapper>
            {meals_picture.map((data) => (
              <TestimonialImg img={data.image} key={data.id} />
            ))}
          </MealPictureWrapper>
        </TestimonialWrap>
      </TestimonialWrapper>
    </TestimonialContainer>
  );
};

export default Testimonials;
