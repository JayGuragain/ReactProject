import { FaPizzaSlice, FaHamburger,FaPepperHot} from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <StyledNavLink to={"/cuisine/Italian"}>
        <FaPizzaSlice style={{ fontSize:'7rem' }}/>
        <h4>Italian</h4>
      </StyledNavLink>

      <StyledNavLink to={"/cuisine/Indian"}>
        <FaPepperHot style={{ fontSize:'7rem' }}/>
        <h4>Indian</h4>
      </StyledNavLink>

      <StyledNavLink to={"/cuisine/Thai"}>
        <GiNoodles style={{ fontSize:'7rem' }} />
        <h4>Thai</h4>
      </StyledNavLink>

      <StyledNavLink to={"/cuisine/Japanese"}>
        <GiChopsticks style={{ fontSize:'7rem' }}/>
        <h4>Japanese</h4>
      </StyledNavLink>
    </List>
  );
}
const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
    padding-bottom: 1rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;

export default Category;
