import React from "react";
import { Helmet } from "react-helmet";

import "../../node_modules/normalize.css/normalize.css";
import "../../node_modules/flexboxgrid/css/flexboxgrid.css";
import "./global.css";

import { Leftbar, LeftbarItem } from "../components/layout/leftbar";
import Background from "../components/layout/background";
import Container from "../components/layout/container.js";
import { BoldLinkContainer, BoldLink } from "../components/typography/boldLink";
import GithubCorner from "../components/github-corner";

export default class DefaultTheme extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <html lang="en" />
          <title>Alexander Fröhlich</title>
          <meta
            name="Description"
            content="Online Portfolio of Alexander Fröhlich"
          />
        </Helmet>
        <GithubCorner />
        <Leftbar>
          <LeftbarItem>A</LeftbarItem>
          <LeftbarItem>F</LeftbarItem>
        </Leftbar>
        <Background>
          <Container>
            <BoldLinkContainer>
              <BoldLink to="/">Home</BoldLink> /{" "}
              <BoldLink to="/cv">CV</BoldLink>
            </BoldLinkContainer>
            {this.props.children}
          </Container>
        </Background>
      </React.Fragment>
    );
  }
}
