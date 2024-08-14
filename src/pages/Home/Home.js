import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes?limit=8&select=name,image,mealType")
      .then((response) => {
        console.log(response.data);
        setRecipes(response.data.recipes);
      });
  }, []);

  const handleViewRecipe = (id) => {
    console.log(`View recipe with id: ${id}`);
    navigate(`/recipe/${id}`);
  };

  return (
    <>
      <Header title="Recipes" />
      <div className="d-flex flex-wrap justify-content-center">
        {recipes.map((recipe) => (
          <Card style={{ width: "18rem" }} key={recipe.id}>
            <Card.Img variant="top" src={recipe.image} />
            <Card.Body>
              <Card.Title>{recipe.name}</Card.Title>
              <Card.Text>{recipe.mealType[0]}</Card.Text>
              <Button
                onClick={() => handleViewRecipe(recipe.id)}
                variant="primary"
              >
                View Recipe
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}
