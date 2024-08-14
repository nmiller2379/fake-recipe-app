import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import "./RecipeDetail.css";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    console.log(`Fetching recipe with id: ${id}`);
    axios.get(`https://dummyjson.com/recipe/${id}`).then((response) => {
      console.log(response.data);
      setRecipe(response.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { mealType, ingredients, instructions } = recipe;
  const renderMealType = () => {
    if (mealType) {
      return mealType.map((type, index) => {
        if (index === 0) {
          return <span key={index}>{type}</span>;
        }
        return <span key={index}> | {type}</span>;
      });
    }
  };
  return (
    <div>
      <Header title={recipe.name} />
      <div>
        <strong>Best for: </strong>
        {renderMealType()}
      </div>
      <img src={recipe.image} alt={recipe.name} style={{ width: "25%" }} />
      <h2>Ingredients</h2>
      <ol>
        {ingredients &&
          ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
      </ol>
      <h2>Instructions</h2>
      <ol>
        {instructions &&
          instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
      </ol>
    </div>
  );
}
