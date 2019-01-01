import React from 'react';
import { Helmet } from 'react-helmet';

import '../../node_modules/normalize.css/normalize.css';
import '../../node_modules/flexboxgrid/css/flexboxgrid.css';
import './global.css';
import {
  Leftbar,
  LeftbarItem,
  Container
} from '../components/layout';

export default ({ children }) => (
  <React.Fragment>
    <Helmet>
      <html lang="en" />
      <title>Alexander Fröhlich</title>
      <meta name="Description" content="Online Portfolio of Alexander Fröhlich" />
    </Helmet>
    <Leftbar>
      <LeftbarItem>A</LeftbarItem>
      <LeftbarItem>F</LeftbarItem>
    </Leftbar>
    <Container>{children}</Container>
  </React.Fragment>
);
