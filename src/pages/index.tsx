import React, { useState, useEffect } from "react";
import { useIntl, FormattedMessage } from "gatsby-plugin-intl";
import { useSpring, animated } from "react-spring";
import "../../def";
import Flex from "../components/flex";
import Logo from "../components/logo";
import H1 from "../components/normal-h1";
import H2 from "../components/normal-h2";
import A, { Link } from "../components/link";
import Spacer from "../components/spacer";
import Caption from "../components/caption";
import TextColumn from "../components/index/text-column";
import SceneColumn from "../components/index/scene-column";
import SceneContainer from "../components/scene-container";
import WorldScene from "../components/scenes/world";
import SEO from "../components/seo";

export default () => {
  const intl = useIntl();
  return (
    <Flex>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "index.seo.title" })}
        description={intl.formatMessage({ id: "index.seo.description" })}
      />
      <TextColumn>
        <Link to="/">
          <Logo />
        </Link>
        <header css="margin-bottom: 64px;">
          <H1>
            <FormattedMessage id="index.header" />
          </H1>
          <p
            css={`
              font-size: 14px;
              font-weight: lighter;
              color: #cfcfcf;
              margin: 0;
            `}
          >
            <A simple href="mailto:froehlich.alexander@pm.me">
              froehlich.alexander@pm.me
            </A>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <A simple href="https://github.com/froehlichA">
              Github
            </A>
          </p>
        </header>
        <p>
          <FormattedMessage id="index.description.job" />
        </p>
        <p>
          <FormattedMessage id="index.description.status" />
        </p>
        <p>
          <Link simple to="/cv">
            <FormattedMessage id="index.description.cv" />
          </Link>
        </p>
        <Spacer></Spacer>
        <H2 color="lightblue">
          <FormattedMessage id="index.projects.title" />
        </H2>
        <ul>
          <li css="list-style: square;">
            <A simple href="https://froehlich.network">
              <FormattedMessage id="index.projects.list.homepage" />
            </A>
          </li>
        </ul>
      </TextColumn>
      <SceneColumn size={300}>
        <Scene></Scene>
      </SceneColumn>
    </Flex>
  );
};

const Scene = () => {
  const [props, set] = useSpring(() => ({
    config: { friction: 16 },
    transform: "scale(0)",
  }));
  useEffect(() => {
    set({ transform: "scale(1)" });
  }, [set]);
  return (
    <animated.div style={props}>
      <SceneContainer size={300}>
        <WorldScene></WorldScene>
        <Caption>
          <FormattedMessage id="index.caption.description" />
        </Caption>
        <Caption>
          <FormattedMessage id="index.caption.action" />
        </Caption>
      </SceneContainer>
    </animated.div>
  );
};
