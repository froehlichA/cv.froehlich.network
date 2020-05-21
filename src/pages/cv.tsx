import React from "react";
import { useIntl, FormattedMessage } from "gatsby-plugin-intl";
import "../../def";
import Logo from "../components/logo";
import A, { Link } from "../components/link";
import SEO from "../components/seo";

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

const technologies = [...languages, ...utils, ...dbs];

export default () => {
  const intl = useIntl();
  return (
    <React.Fragment>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "cv.seo.title" })}
        description={intl.formatMessage({ id: "cv.seo.description" })}
      />
      <Link to="/">
        <Logo />
      </Link>
      <h1 css="margin-top: 10px;">
        <FormattedMessage id="cv.title" />
      </h1>
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
        <FormattedMessage
          id="cv.addendum"
          values={{
            years: Math.abs(
              new Date(
                Date.now() - new Date("2000-08-30").getTime()
              ).getFullYear() - 1970
            ),
            cae: (...chunks) => <A href="/files/cae.pdf">{chunks}</A>,
            ctf: (...chunks) => <A href="/files/ctf.pdf">{chunks}</A>,
          }}
        />
      </p>
      <p>
        <FormattedMessage
          id="cv.status"
          values={{
            mail: (...chunks) => (
              <A href="mailto:froehlich.alexander@pm.me">{chunks}</A>
            ),
          }}
        ></FormattedMessage>
      </p>
      <hr />
      <p>
        <FormattedMessage
          id="cv.download"
          values={{
            cv: (...chunks) => <A href="/files/resume.pdf">{chunks}</A>,
          }}
        />
      </p>
    </React.Fragment>
  );
};
