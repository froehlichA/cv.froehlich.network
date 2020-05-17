import React from "react";
import "../../def";
import Logo from "../components/logo";
import A, { Link } from "../components/link";

const languages = [
  "javascript",
  "java",
  "c++",
  "c",
  "python",
  "haskell",
  "typescript",
];

const utils = [
  "sass",
  "angular",
  "react",
  "vue",
  "webpack",
  "redux",
  "mocha",
  "jest",
  "cypress",
  "PWAs",
  "electron",
  "flutter",
  "react-native",
  "express",
  "nestjs",
  "spring",
  "laravel",
  "flask",
];

const dbs = ["postgres", "oracle", "mongo", "neo4j", "redis"];

const shuffleArray = (a: any[]) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const technologies = shuffleArray([...languages, ...utils, ...dbs]);

export default () => {
  return (
    <React.Fragment>
      <Link to="/">
        <Logo />
      </Link>
      <h1 css="margin-top: 10px;">Technologies I've worked with</h1>
      <p
        css={`
          font-size: 40px;
          @media only screen and (min-width: 768px) {
            font-size: 60px;
          }
        `}
      >
        {technologies.map(t => (
          <span>
            {t} <span css="color: #444444;">/</span>{" "}
          </span>
        ))}{" "}
        . . .
      </p>
      <p>
        I'm{" "}
        {Math.abs(
          new Date(
            Date.now() - new Date("2000-08-30").getTime()
          ).getFullYear() - 1970
        )}{" "}
        years old. I'm from Austria, but I know{" "}
        <A href="/files/cae.pdf">my way around English</A>. I'm a bit interested
        into <A href="/files/ctf.pdf">IT Security</A> too.
      </p>
      <hr />
      <p>
        If you want my complete CV <b>in german</b>, you can get it{" "}
        <A href="/files/resume.pdf">here</A>.
      </p>
    </React.Fragment>
  );
};
