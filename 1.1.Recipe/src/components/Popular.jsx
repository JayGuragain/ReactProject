import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Popular() {
  const apiKey = "d22a0577517f4038a25d415b8fed9c6f";

  //Step 1: Define state to hold the fetched data
  const [popular, setPopular] = useState([]);

  //Step 2: Define function to fetch and update the state
  async function getPopular() {
    // Check if there's something in the magic box called "popular"
    const check = localStorage.getItem("popular");
  
    if (check) {
      // Take out what's in the box and turn it into something we can use (like a recipe book)
      setPopular(JSON.parse(check));
    } else {
      // If the box is empty, we need to go get some information from the internet
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=9`
      );
  
      const data = await api.json();
  
      // Now, we have our recipes, and we want to keep them for later. So, we put them into the magic box called "popular"
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      //recipes is the 'data' object this is returned by API
      // "recipes": [ { "id": 1, "title": "Recipe 1" } ]
      setPopular(data.recipes);
    }
  }

  //Step 3: Use useEffect to call the fetch function when the componenets mounts
  useEffect(() => {
    // Call the getPopular function when the component mounts
    getPopular();
  }, []);

  return (
    <div>
      <Wrapper>
        <h3> Popular Picks </h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
            breakpoints: {
              1024: {
                perPage: 3,
              },
              767: {
                perPage: 2,
              },
              640: {
                perPage: 1,
              },
            },
          }}
        >
          {popular.map(({ title, id, image }) => (
          <SplideSlide key={id}>
            <Card>
              <Link to={`/recipe/${id}`}>
                <p>{title}</p>
                <img src={image} alt={title} />
                <Gradient />
              </Link>
            </Card>
          </SplideSlide>
        ))}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Popular;