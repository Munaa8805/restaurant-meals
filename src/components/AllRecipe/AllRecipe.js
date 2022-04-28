import React from "react";
import {
  AllrecipeContainer,
  AllrecipeWrapper,
  AllrecipeCard,
  CategorySpan,
  RecipeCategory,
  TitleH3,
  DivContainer
} from "./AllRecipeElements";
import { AllrecipeData, allRecipeCategories } from "../../data";
const AllRecipe = () => {
  return (
    <AllrecipeContainer id="meals">
      <h3>MEALS</h3>
      <h1>Omnifood AI chooses from 5,000+ recipes</h1>
      <AllrecipeWrapper>
        {AllrecipeData.map(data => (
          <AllrecipeCard key={data.id}>
            <img src={data.image} />
            <CategorySpan>{data.category[0]}</CategorySpan>
            <h1>{data.title}</h1>
            <p>
              <ion-icon
                style={{
                  height: "2rem",
                  width: "2rem",
                  color: "#e67e22",
                  marginRight: "10px"
                }}
                name="flame-outline"
              ></ion-icon>
              <span>{data.recipece[0]}&nbsp; </span> calories
            </p>
            <p>
              <ion-icon
                style={{
                  height: "2rem",
                  width: "2rem",
                  color: "#e67e22",
                  marginRight: "10px"
                }}
                name="restaurant-outline"
              ></ion-icon>
              NutriScore <span>&nbsp; {data.recipece[1]} </span>
            </p>
            <p>
              <ion-icon
                style={{
                  height: "2rem",
                  width: "2rem",
                  color: "#e67e22",
                  marginRight: "10px"
                }}
                name="star-outline"
              ></ion-icon>
              <span>{data.recipece[2]} &nbsp;</span> rating (537)
            </p>
          </AllrecipeCard>
        ))}
        <AllrecipeCard>
          <TitleH3>Works with any diet:</TitleH3>
          {allRecipeCategories.map(item => (
            <RecipeCategory>
              <p>
                <ion-icon
                  style={{
                    height: "2rem",
                    width: "2rem",
                    color: "#e67e22",
                    marginRight: "1.5rem",
                    marginLeft: "1rem"
                  }}
                  name="checkmark-outline"
                ></ion-icon>
                {item.name}
              </p>
            </RecipeCategory>
          ))}
        </AllrecipeCard>
      </AllrecipeWrapper>
      <DivContainer>
        <span>See all recipes →</span>
      </DivContainer>
    </AllrecipeContainer>
  );
};

export default AllRecipe;
