import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SearchResults.css";

export default function SearchResults() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleViewRecipe = (id) => {
    console.log(`View recipe with id: ${id}`);
    navigate(`/recipe/${id}`);
  };

  useEffect(() => {
    console.log(`Fetching recipes with search term: ${id}`);
    // Fetch recipes with search term
    axios
      .get(`https://dummyjson.com/recipes/search?q=${id}`)
      .then((response) => {
        console.log(response.data);
        setRecipes(response.data.recipes);
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatId = (word) => {
    const capitalLetter = word[0].toUpperCase();
    const restOfWord = word.slice(1);
    return capitalLetter + restOfWord;
  };

  return loading ? (
    <h1>Searching...</h1>
  ) : (
    <div id="results">
      <Header
        title={
          recipes.length > 0
            ? `Search Results for ${formatId(id)}`
            : `No Results for ${formatId(id)}`
        }
      />
      {recipes.length === 0 ? (
        <Button variant="primary" onClick={() => navigate("/")}>
          Home
        </Button>
      ) : (
        recipes.map((recipe) => (
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
        ))
      )}
    </div>
  );
}
