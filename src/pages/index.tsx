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
import ListSquare from "../components/list-square";
import TextColumn from "../components/index/text-column";
import SceneColumn from "../components/index/scene-column";
import SceneContainer from "../components/scene-container";
import WorldScene from "../components/scenes/world";
import CubeScene from "../components/scenes/cube";
import SEO from "../components/seo";

const intlA = (href: string) => (...chunks: any) => (
  <A simple href={href}>{chunks}</A>
);

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
          <FormattedMessage id="index.description.info" />
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
        <ListSquare>
          <li>
            <FormattedMessage
              id="index.projects.list.homeserver"
              values={{
                nixos: intlA("https://nixos.org")
              }}
            />
          </li>
          <li>
            <FormattedMessage id="index.projects.list.learninglang" />
          </li>
          <li>
            <FormattedMessage
              id="index.projects.list.homepage"
              values={{
                home: intlA("https://froehlich.network")
              }}
            />
          </li>
        </ListSquare>
      </TextColumn>
      <SceneColumn size={300}>
        <Scene></Scene>
      </SceneColumn>
    </Flex>
  );
};

const scenes = [<WorldScene></WorldScene>, <CubeScene></CubeScene>];

const Scene = () => {
  const [props, set] = useSpring(() => ({
    config: { friction: 16 },
    transform: "scale(0)",
  }));
  useEffect(() => {
    set({ transform: "scale(1)" });
  }, [set]);
  const [randomScene] = useState(
    scenes[Math.floor(Math.random() * scenes.length)]
  );
  return (
    <animated.div style={props}>
      <SceneContainer size={300}>
        {randomScene}
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
