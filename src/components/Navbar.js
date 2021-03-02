import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <StyledNavBar>
        <Link to="/">
          <Styledh3>Sickness</Styledh3>
        </Link>
        <StyledUl>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/latest">
            <li>Latest</li>
          </Link>
          <Link to="/popUp">
            <li>Ammend</li>
          </Link>
        </StyledUl>
      </StyledNavBar>
    </nav>
  );
};

const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 5vh;
  width: 100%;
  position: fixed;
  background-color: #f5deb3;
  color: chartreuse;
  overflow: hidden;
`;

const StyledUl = styled.ul`
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: right;
  list-style: none;
  padding: 0.1rem;
  font-size: 1.3rem;
`;

const Styledh3 = styled.h3`
  margin: 0;
  padding: 0;
  justify-content: left;
  font-size: 1.5rem;
  font-weight: bold;
`;
