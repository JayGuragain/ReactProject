
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";


const App = () => {

  const apiKey = "d22a0577517f4038a25d415b8fed9c6f";

  return (
    <div>
      
      {!apiKey ? (
        <p>
          Please get the API key from{" "}
          <strong>
            <a href="https://spoonacular.com/food-api/">Spoonacular Food Api</a>
          </strong>
          <br />
          <br />
          and add it in your env file with{" "}
          <strong>"apiKey"</strong> name and restart the app
        </p>
      ) : (
        <>
          <Search />
          <Category />
          <Pages />
        </>
      )}
    </div>
  );
};
const Nav = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;


export default App;