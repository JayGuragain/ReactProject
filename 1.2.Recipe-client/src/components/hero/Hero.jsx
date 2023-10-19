import React from "react";
import classes from "./hero.module.css";
import meal from "../../assets/meal1.jpg";
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {
  const URL1 =
    "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
  const URL2 = "https://www.themealdb.com/api/json/v1/1/search.php?s=burger";
  const [chickenRecipe, setChickenRecipe] = useState("");
  const [burgerRecipe, setBurgerRecipe] = useState("");

  useEffect(() => {
    const fetchChickenRecipe = async () => {
      try {
        const res = await fetch(URL1);
        const data = await res.json();

        setChickenRecipe(data.meals[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchChickenRecipe();
  }, []);

  useEffect(() => {
    const fetchBurgerRecipe = async () => {
      try {
        const res = await fetch(URL2);
        const data = await res.json();
        console.log(data.meals[0].strMeal);
        setBurgerRecipe(data.meals[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBurgerRecipe();
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2>
            Craving some <br />
            delicious meals
          </h2>
          <h5>Feeling the cooking vibe</h5>
          <p className={classes.firstDesc}>
            You've come to the right place for some tasty recipes
          </p>
          <p className={classes.secondDesc}>Just see what we have for you</p>
          <div className={classes.buttons}>
            <button>Get Started</button>
            <button>Explore recipes</button>
          </div>
        </div>
        <div className={classes.right}>
          <img src={meal} />
          {/* This is an image element with its 'src' attribute set to the value of the 'meal' variable. */}
          <div className={classes.chickenMeal}>
            <div className={classes.imgContainer}>
              <img src={chickenRecipe?.strMealThumb} />
              {/* // Access the 'strMealThumb' property of the 'chickenRecipe' object if it exists.
                  // This uses optional chaining (?.) to safely access the property, preventing errors
                  // if 'chickenRecipe' is undefined or doesn't have the 'strMealThumb' property. */}
            </div>
            <h5>{chickenRecipe?.strMeal}</h5>
            {/* This is an 'h5' (heading) element with its content set to the value of 'chickenRecipe?.strMeal'. */}
          </div>
          <div className={classes.burgerMeal}>
            {/* This is a similar nested div with the CSS class 'burgerMeal'. */}
            <div className={classes.imgContainer}>
              {/* Another nested div with the CSS class 'imgContainer'. */}
              <img src={burgerRecipe?.strMealThumb} />
              {/* An image element with its 'src' attribute set to 'burgerRecipe?.strMealThumb'. */}
            </div>
            <h5>{burgerRecipe?.strMeal}</h5>
            {/* An 'h5' element with its content set to 'burgerRecipe?.strMeal'. */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
