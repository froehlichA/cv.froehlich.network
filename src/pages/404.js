import React from "react";
import Theme from "../themes/default";
import { Link } from "gatsby";

import Spacer from "../components/layout/spacer";
import Hero from "../components/typography/hero";
import { TextP } from "../components/typography/toText";

const errorMessages = [
  "Hmm... I don't know what went wrong, but something did.",
  "Looks like one of us did something wrong.",
  "Go back to start. Do not pass go, do not collect $200."
];

export default () => (
  <Theme>
    <Spacer height="10rem" />
    <Hero>I'm sorry,</Hero>
    <Hero inverted>it's a 404</Hero>
    <Spacer height="1rem" />
    <TextP>
      {errorMessages[Math.floor(Math.random() * errorMessages.length)]}
    </TextP>
    <TextP>
      You can click <Link to="/">HERE</Link> to go back home.
    </TextP>
  </Theme>
);
