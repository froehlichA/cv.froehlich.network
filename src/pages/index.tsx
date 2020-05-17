import React from "react";
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
import SceneWorld from "../components/scenes/world";

const IndexPage = () => (
  <Flex>
    <TextColumn>
      <Link to="/">
        <Logo />
      </Link>
      <header css="margin-bottom: 64px;">
        <H1>Alexander Fröhlich - Austria</H1>
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
          <A simple href="https://github.com/froehlichA">Github</A>
        </p>
      </header>
      <p>I'm a junior programmer with a focus on frontend development.</p>
      <p>
        I'm currently in civil service, and am searching for a software
        development job for afterwards.
      </p>
      <p>
        <Link simple to="/cv">Here's my CV, if you're interested.</Link>
      </p>
      <Spacer></Spacer>
      <H2 color="lightblue">Recent Projects</H2>
      <ul>
        <li css="list-style: square;">
          <A simple href="https://froehlich.network">Homepage - built with React</A>
        </li>
      </ul>
    </TextColumn>
    <SceneColumn size={300}>
      <SceneContainer size={300}>
        <SceneWorld></SceneWorld>
        <Caption>Pseudo-3D Renderer in Javascript</Caption>
        <Caption>(Try dragging it!)</Caption>
      </SceneContainer>
    </SceneColumn>
  </Flex>
);

export default IndexPage;
