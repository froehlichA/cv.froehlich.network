import React from "react";
import Theme from "../themes/default";
import { graphql, Link } from "gatsby";

import {
  Row,
  LeftColumn,
  RightColumn,
  LeftParagraph,
  RightParagraph
} from "../components/layout/flex";
import { TextH1, TextH2, TextP } from "../components/typography/toText";
import Spacer from "../components/layout/spacer";
import Hero from "../components/typography/hero";
import {
  Cover,
  CoverImage,
  CoverContent,
  Floater
} from "../components/layout/cover";
import { List, ListItem } from "../components/typography/list";
import Small from "../components/typography/small";
import BigLink from "../components/typography/bigLink";

export default ({ data }) => (
  <Theme>
    <Row>
      <LeftColumn>
        <TextH1>Alexander Fröhlich</TextH1>
      </LeftColumn>
      <RightColumn>
        <TextH2>
          Programmer from Austria. Currently studying at HTBLA Kaindorf,
          graduation date is June 2019. Feel free to contact me.
        </TextH2>
      </RightColumn>
    </Row>
    <Spacer height="6rem" />
    <Hero>Hi there.</Hero>
    <Hero color="fg" inverted>
      I solve problems using code.
    </Hero>
    <Spacer height="8rem" />
    <Row>
      <LeftParagraph>
        <TextP>
          Working with my broad range of coding skills, I can create
          applications for Web / Desktop / Mobile, prototype software projects,
          and design database structures and algorithms.
        </TextP>
        <TextP>
          Sometimes, I also like to write stuff, for others to read / enjoy /
          criticize.
        </TextP>
      </LeftParagraph>
    </Row>
    <Spacer height="10rem" />
    <Cover>
      <CoverImage fluid={data.space.childImageSharp.fluid} />
      <CoverContent>
        <Spacer height="4rem" />
        <Hero color="white" shadow>
          Above and beyond
        </Hero>
        <Spacer height="1rem" />
        <Row>
          <RightParagraph>
            <Floater inverted>
              <TextP inverted>
                My school taught me a lot regarding not only programming, but
                understanding the deeper meanings and intentions, the workflows
                and design processes behind it.
              </TextP>
              <TextP inverted>
                We were not only taught how to write in certain programming
                languages, but also about the internal functioning of computers,
                building and maintaining a computer network, and the
                considerations that go into planning a software project from
                scratch.
              </TextP>
              <TextP inverted>
                In the meantime, I had picked up web-development as a hobby, but
                it quickly involved into a fascination. The ability of websites
                and webapps to have a far wider reach than traditional
                applications tempted me, and so began my journey into the world
                of webdesign, javascript, and webdevelopment in general, which
                is still going strong to this day.
              </TextP>
            </Floater>
          </RightParagraph>
        </Row>
        <Spacer height="4rem" />
      </CoverContent>
    </Cover>
    <Spacer height="10rem" />
    <Row>
      <LeftColumn>
        <TextH2>What I have learned about so far:</TextH2>
      </LeftColumn>
      <RightColumn>
        <List>
          <ListItem>
            Programming in multiple languages including Java, C# & Python
          </ListItem>
          <ListItem>Design Patterns & Best Practises</ListItem>
          <ListItem>Algorithms for Sorting, Searching, etc.</ListItem>
          <ListItem>
            Database Management, Design & Querying; with both SQL and NoSQL
            databases
          </ListItem>
          <ListItem>Network Management and Design using Cisco Systems</ListItem>
          <ListItem>
            Webdesign & Webdevelopment using HTML, CSS, and JS, as well as
            popular frameworks and tools
          </ListItem>
          <ListItem>
            <Link to="/cv">More here</Link>
          </ListItem>
        </List>
      </RightColumn>
    </Row>
    <Spacer height="0.5rem" />
    <Row>
      <LeftColumn>
        <TextH2>What I look forward to doing:</TextH2>
      </LeftColumn>
      <RightColumn>
        <List>
          <ListItem>Working with and in a team</ListItem>
          <ListItem>
            Gaining experience with both development and management
          </ListItem>
        </List>
      </RightColumn>
    </Row>
    <Spacer height="10rem" />
    <Cover>
      <CoverImage fluid={data.woodwork.childImageSharp.fluid} />
      <CoverContent>
        <Spacer height="4rem" />
        <Hero color="white" shadow>
          Reach for the stars
        </Hero>
        <Spacer height="1rem" />
        <Row>
          <LeftParagraph>
            <Floater inverted>
              <TextP inverted>
                Everyone can learn coding like everyone can learn woodworking.
                It takes time and patience to succeed, and you can recognize
                sloppy craftmanship in an instant.
              </TextP>
              <TextP inverted>
                That is why I never stop learning. You can always improve
                yourself, always learn more, always strive to be better. No one
                ever reaches perfection or absolute knowledge in a craft, but I
                might as well try.
              </TextP>
            </Floater>
          </LeftParagraph>
        </Row>
        <Spacer height="4rem" />
      </CoverContent>
    </Cover>
    <Spacer height="10rem" />
    <Row>
      <BigLink>
        My <a href="mailto:froald14@new.edvhtl.at">Email</a> /{" "}
        <a href="https://github.com/froehlichA">Github</a> /{" "}
        <Link to="/cv">CV</Link>
      </BigLink>
    </Row>
    <Small>© 2018 - Alexander Fröhlich</Small>
  </Theme>
);

export const query = graphql`
  query {
    space: file(relativePath: { eq: "space.jpg" }) {
      childImageSharp {
        fluid(grayscale: true, maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    woodwork: file(relativePath: { eq: "woodwork.jpg" }) {
      childImageSharp {
        fluid(grayscale: true, maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
