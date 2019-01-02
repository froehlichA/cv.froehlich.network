import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import '../../node_modules/normalize.css/normalize.css';
import '../../node_modules/flexboxgrid/css/flexboxgrid.css';
import './global.css';
import { Leftbar, LeftbarItem, Container, Content } from '../components/layout';
import { FloatingButton } from '../components/elements';

export default class DefaultTheme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        fg: 'black',
        bg: 'white'
      }
    };
    this.invertTheme = this.invertTheme.bind(this);
  }

  invertTheme() {
    this.setState((prevState) => ({ theme: { fg: prevState.theme.bg, bg: prevState.theme.fg }}));
    console.log(this.state);
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
          <Leftbar>
            <LeftbarItem>A</LeftbarItem>
            <LeftbarItem>F</LeftbarItem>
          </Leftbar>
          <FloatingButton onClick={this.invertTheme}>
            <img src="./day.svg" alt="Theme Toggler" />
          </FloatingButton>
          <Content>
            <Container>{this.props.children}</Container>
          </Content>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}
