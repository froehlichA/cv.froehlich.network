import React from "react";
import { Link } from "gatsby";
import IndexLayout from "../layouts/index";
import Icon from "../components/icon";
import Row from "../components/row";
import TextCol from "../components/index/text-col";
import SceneCol from "../components/index/scene-col";
import SceneContainer from "../components/index/scene-con";
import SceneWorld from "../components/scenes/world";

const IndexPage = () => (
  <IndexLayout>
    <Row>
      <TextCol>
        <Link to="/">
          <Icon />
        </Link>
        <header>
          <h1>Alexander Fröhlich - Austria</h1>
          <p>
            <a href="mailto:froehlich.alexander@pm.me">
              froehlich.alexander@pm.me
            </a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="https://github.com/froehlichA">Github</a>
          </p>
        </header>
        <p>I'm a junior programmer with a focus on frontend development.</p>
        <p>
          I'm currently in civil service, and am searching for a software
          development job for afterwards.
        </p>
        <p>
          <Link to="/cv">Here's my CV, if you're interested.</Link>
        </p>
        <p className="spacer"></p>
        <h2>Recent Projects</h2>
        <ul>
          <li>
            <Link to="/">Homepage - built with React</Link>
          </li>
        </ul>
      </TextCol>
      <SceneCol>
        <SceneContainer>
          <SceneWorld></SceneWorld>
          <p className="small">Pseudo-3D Renderer in Javascript</p>
          <p className="small">(Try dragging it!)</p>
        </SceneContainer>
      </SceneCol>
    </Row>
  </IndexLayout>
);

export default IndexPage;
