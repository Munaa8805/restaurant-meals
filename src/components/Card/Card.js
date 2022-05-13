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
        <img src={props.task.image_url} />
      </ContainerImage>
      <ContainerContent>
        <Content>
          <h3>{props.task.title}</h3>
          <ul>
            <li>
              <span>Publisher :</span> {props.task.publisher}
            </li>
            <li>
              <span>RecipeID :</span> {props.task.recipe_id}
            </li>
            <li>
              <span>Social Rank :</span> {props.task.social_rank.toFixed(0)}
            </li>
          </ul>
        </Content>
        <ButtonContainer>
          <a href={props.task.source_url} target="_blank">
            Read more
          </a>
        </ButtonContainer>
      </ContainerContent>
    </CardContainer>
  );
};

export default Card;
