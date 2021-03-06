import React from "react";
import { Link, useHistory } from "react-router-dom";
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
  const history = useHistory();

  const allRecipeHandler = () => {
    history.push("/meals");
  };
  // let ingredients = [];

  // for (const ingredient of AllrecipeData.category) {
  //   ingredients.push(<CategorySpan>{ingredient}</CategorySpan>);
  // }
  // console.log("ingredients", ingredients);
  return (
    <AllrecipeContainer id="meals" to="/meals">
      <h3>MEALS</h3>
      <h1>Omnifood AI chooses from 5,000+ recipes</h1>
      <AllrecipeWrapper>
        {AllrecipeData.map((data) => (
          <AllrecipeCard key={data.id}>
            <img src={data.image} alt="meal" />
            {/* {ingredients} */}
            <CategorySpan>
              {data.category.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </CategorySpan>
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
          {allRecipeCategories.map((item, index) => (
            <RecipeCategory key={index}>
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
        <span onClick={allRecipeHandler}>See all recipes ???</span>
      </DivContainer>
    </AllrecipeContainer>
  );
};

export default AllRecipe;
