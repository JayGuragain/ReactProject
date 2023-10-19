import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Form } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

const submitHandler = (e) => {
    e.preventDefault();
    navigate('./searched/' + input)
};

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch /> 
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
        
      </div>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  margin-top: 0.5rem;
  /*  margin: 0rem 20rem; */

  div {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search;
