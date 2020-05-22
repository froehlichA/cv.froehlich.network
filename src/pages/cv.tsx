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

const linkTo = (href: string) => (...chunks: any) => (
  <A href={href}>{chunks}</A>
);

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
            cae: linkTo("/files/cae.pdf"),
            ctf: linkTo("/files/ctf.pdf"),
          }}
        />
      </p>
      <p>
        <FormattedMessage
          id="cv.experience"
          values={{
            kain: linkTo("https://www.htl-kaindorf.at/"),
            b: linkTo("https://www.b4b-solutions.com/"),
            k: linkTo("https://krickl.gmbh/"),
            pbs: linkTo("https://paketbox-systems.at/"),
          }}
        />
      </p>
      <p>
        <FormattedMessage
          id="cv.status"
          values={{
            mail: linkTo("mailto:froehlich.alexander@pm.me"),
          }}
        />
      </p>
      <hr />
      <p>
        <FormattedMessage
          id="cv.download"
          values={{
            cv: linkTo("/files/resume.pdf"),
          }}
        />
      </p>
    </React.Fragment>
  );
};
