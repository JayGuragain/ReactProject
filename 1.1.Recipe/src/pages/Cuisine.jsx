import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const Cuisine = () => {
  const apiKey = "d22a0577517f4038a25d415b8fed9c6f";

  const [cuisine, setCuisine] = useState([]);

  let params = useParams();

  async function getCuisine(name) {
    //const getCuisine = async(name){}

    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=9&cuisine=${name}`
    );

    const data = await api.json();
    return data.results;
  }

  useEffect(() => {
    let isMounted = true;
    getCuisine(params.type).then((data) => {
      if (isMounted) setCuisine(data);
    });
    return () => {
      isMounted = false;
    };
  }, [params.type]);

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
          </Card>
        );
      })} */}

      {cuisine.map(({ id, title, image }) => (
        <Card key={id}>
          <Link to={`/recipe/${id}`}>
            <img src={image} alt={title} />
            <h4>{title}</h4>
          </Link>
        </Card>
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisine;
