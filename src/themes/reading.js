import React from "react";
import DefaultTheme from "./default";
import { Reader } from "../components/layout";

export default class ReadingTheme extends React.Component {
  render() {
    return (
      <DefaultTheme>
        <Reader>{this.props.children}</Reader>
      </DefaultTheme>
    );
  }
}
