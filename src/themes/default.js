import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import '../../node_modules/normalize.css/normalize.css';
import '../../node_modules/flexboxgrid/css/flexboxgrid.css';
import './global.css';
import { Leftbar, LeftbarItem, Container, Background } from '../components/layout';
import GithubCorner from '../components/github-corner';

export default class DefaultTheme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        fg: 'black',
        lightfg: 'grey',
        lightbg: 'lightgrey',
        bg: 'white',
      }
    };
    this.invertTheme = this.invertTheme.bind(this);
  }

  invertTheme() {
    this.setState((prevState) => (
      { theme:{
        fg: prevState.theme.bg,
        lightfg: prevState.theme.lightbg,
        lightbg: prevState.theme.lightfg,
        bg: prevState.theme.fg
      }}
    ));
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <React.Fragment>
          <Helmet>
            <html lang="en" />
            <title>Alexander Fröhlich</title>
            <meta
              name="Description"
              content="Online Portfolio of Alexander Fröhlich"
            />
          </Helmet>
          <GithubCorner></GithubCorner>
          <Leftbar>
            <LeftbarItem>A</LeftbarItem>
            <LeftbarItem>F</LeftbarItem>
          </Leftbar>
          <Background>
            <Container>{this.props.children}</Container>
          </Background>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}
