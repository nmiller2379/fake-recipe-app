import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    axios.get("https://dummyjson.com/recipes").then((response) => {
      console.log(response.data);
    });
  }, []);
  return (
    <>
      <Header title="Recipes" />
    </>
  );
}
