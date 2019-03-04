import React from "react";
import DefaultTheme from "./default";
import { createGlobalStyle } from "styled-components";

import Reader from "../components/layout/reader";

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
