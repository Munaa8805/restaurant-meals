import React from "react";
import {
  CardContainer,
  ContainerImage,
  ContainerContent,
  Content,
  ButtonContainer
} from "./CardElements";
const Card = (props) => {
  return (
    <CardContainer>
      <ContainerImage>
        <img src={props.data.image_url} alt={props.data.title} />
      </ContainerImage>
      <ContainerContent>
        <Content>
          <h3>{props.data.title}</h3>
          <ul>
            <li>
              <span>Publisher :</span> {props.data.publisher}
            </li>
            <li>
              <span>RecipeID :</span> {props.data.recipe_id}
            </li>
            <li>
              <span>Social Rank :</span> {props.data.social_rank.toFixed(0)}
            </li>
          </ul>
        </Content>
        <ButtonContainer>
          <a href={props.data.source_url} target="_blank">
            Read more
          </a>
        </ButtonContainer>
      </ContainerContent>
    </CardContainer>
  );
};

export default Card;
