import React, { ReactNode } from "react";
import { createGlobalStyle } from "styled-components";
import "typeface-mukta";

const GlobalStyle = createGlobalStyle`
  body {
    color: #efefef;
    background-color: #111111;
    padding: 10px;
    font-family: "Mukta", serif;
    @media only screen and (min-width: 768px) {
      padding: 60px;
    }
  }
  h1 {
    margin-top: 60px;
  }
  p {
    font-size: 24px;
  }
  a {
    color: lightblue;
    &:hover {
      color: skyblue;
    }
  }
  .big {
    font-size: 40px;
    @media only screen and (min-width: 768px) {
      font-size: 60px;
    }
  }
  .bigger {
    font-size: 32px;
    @media only screen and (min-width: 768px) {
      font-size: 42px;
    }
  }
  .grey {
    color: #444444;
  }
`;

interface IndexLayoutProps {
  children: ReactNode;
}

export default ({ children }: IndexLayoutProps) => {
  return (
    <React.Fragment>
      <GlobalStyle></GlobalStyle>
      {children}
    </React.Fragment>
  );
};
