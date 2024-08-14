import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    console.log(`Fetching recipe with id: ${id}`);
    axios.get(`https://dummyjson.com/recipe/${id}`).then((response) => {
      console.log(response.data);
      setRecipe(response.data);
    });
  }, []);
  return (
    <div>
      <Header title={recipe?.name} />
      <p>{recipe?.description}</p>
      <img src={recipe?.image} alt={recipe?.name} style={{width: "25%"}} />
    </div>
  );
}
