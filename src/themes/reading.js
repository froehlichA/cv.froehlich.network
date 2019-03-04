import React from "react";
import DefaultTheme from "./default";
import { Reader } from "../components/layout";
import { createGlobalStyle } from "styled-components";

const GlobalReadingStyle = createGlobalStyle``;

export default class ReadingTheme extends React.Component {
  render() {
    return (
      <DefaultTheme>
        <GlobalReadingStyle />
        <Reader>{this.props.children}</Reader>
      </DefaultTheme>
    );
  }
}
