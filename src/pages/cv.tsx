import React from "react";
import { Link } from "gatsby";
import CvLayout from "../layouts/cv";
import Icon from "../components/icon";

const languages = [
  "javascript",
  "java",
  "c++",
  "c",
  "python",
  "haskell",
  "typescript",
];

const technologies = [
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

export default () => {
  return (
    <CvLayout>
      <Link to="/">
        <Icon />
      </Link>
      <h1>Technologies I've worked with</h1>
      <p className="big">
        {shuffleArray([...languages, ...technologies, ...dbs]).map(t => (
          <span>
            {t} <span className="grey">/</span>{" "}
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
        <a href="/files/cae.pdf">my way around English</a>.
        I'm a bit interested into <a href="/files/ctf.pdf">IT Security</a> too.
      </p>
      <hr />
      <p>
        If you want my complete CV <b>in german</b>, you can get it{" "}
        <a href="/files/resume.pdf">here</a>.
      </p>
    </CvLayout>
  );
};
