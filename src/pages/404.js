import React from 'react';
import Theme from '../themes/default';
import { Spacer } from '../components/layout';
import { Hero, TextP } from '../components/typography';
import { Link } from 'gatsby';

export default () => (
  <Theme>
    <Spacer height="10rem" />
    <Hero>I'm sorry,</Hero>
    <Hero inverted>it's a 404</Hero>
    <Spacer height="1rem" />
    <TextP>There aren't really any other pages. Maybe there will be more in the future?</TextP>
    <TextP>You can click <Link to="/">HERE</Link> to go back home.</TextP>
  </Theme>
)