import React, { ReactNode } from "react";
import { createGlobalStyle } from "styled-components";
import 'typeface-mukta';

const GlobalStyle = createGlobalStyle<{ color: string }>`
  body {
    color: #efefef;
    background-color: #111111;
    padding: 10px;
    font-family: "Mukta", serif;
    @media only screen and (min-width: 768px) {
      padding: 60px;
    }
  }
  h1, h2, p {
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 0px;
    &.spacer {
      margin-bottom: 42px;
      @media only screen and (min-width: 768px) {
        margin-bottom: 64px;
      }
    }
    &.spacer-small {
      margin-bottom: 32px;
    }
    &.small {
      font-size: 14px;
      margin: 0;
      color: #afafaf;
      text-align: right;
      width: 100%;
      font-style: italic;
    }
  }
  a {
    color: inherit;
    &:hover {
      color: #afafaf;
    }
  }
  header {
    margin-bottom: 64px;
    p {
      font-size: 14px;
      font-weight: lighter;
      color: #cfcfcf;
      margin: 0;
    }
  }
  h2 {
    color: ${props => props.color};
  }
  ul {
    li {
      font-size: inherit;
      list-style: katakana;
      &:hover {
        background: #222222;
        cursor: pointer;
      }
      a {
        text-decoration: underline solid 1px;
        display: block;
        padding: 6px;
        width: 100%;
      }
    }
  }
  button {
    margin-top: 18px;
    padding: 4px 12px;
    color: inherit;
    background-color: inherit;
    border: 1px solid #efefef;
  }
`;

interface IndexLayoutProps {
  children: ReactNode;
}

export default ({ children }: IndexLayoutProps) => {
  return (
    <React.Fragment>
      <GlobalStyle color="lightblue"></GlobalStyle>
      {children}
    </React.Fragment>
  );
};
