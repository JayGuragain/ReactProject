import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import classes from "./favouriteFoods.module.css";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const FavouriteFoods = () => {
  const URL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=rice";
  const [recipes, setRecipes] = useState([]);
  const [showRecipe, setShowRecipe] = useState(0);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();

        setRecipes(data.meals);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecipes();
  }, []);
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.tiltes}>
            <h5>Recipes people like the most</h5>
            <h2>Our Client's favourite recipes</h2>
            <div className={classes.recipes}>
              <AiOutlineArrowLeft
                onClick={() => handleArrow("left")}
                className={classes.leftArrow}
              />
              {recipes.map((recipe) => {
                <div
                  style={{ transform: `translateX(-${showRecipe * 750}px)` }}
                  className={classes.recipe}
                  key={recipe.idMeal}
                >
                  <img src={recipe.strMealThumb} />
                  <h3>{recipe.strMeal}</h3>
                </div>;
              })}
              <AiOutlineArrowRight
                onClick={() => handleArrow("right")}
                className={classes.rightArrow}
              />
            </div>
            <div className= {classes.dots}>
              {recipes.map((recipe, index) => {
                <div onClick={() => setShowRecipe(index)} className={`${classes.dot} ${showRecipe === index && classes.activeDot}`} key={recipe.idMeal}>
                  </div>
              })}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 

export default FavouriteFoods;
