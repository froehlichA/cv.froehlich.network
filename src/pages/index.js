import React from 'react';
import Theme from '../themes/default';

import {
  Spacer,
  Row,
  LeftColumn,
  RightColumn,
  LeftParagraph,
  RightParagraph
} from '../components/layout';
import {
  Hero,
  BigLink,
  TextH1,
  TextH2,
  TextP,
  List,
  ListItem
} from '../components/typography';
import {
  Cover,
  CoverImage,
  CoverContent,
  Floater
} from '../components/elements';

export default () => (
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
    <Hero inverted hover>
      I solve problems using code.
    </Hero>
    <Spacer height="2rem" />
    <Row>
      <LeftParagraph>
        <TextP>
          Working with my broad range of coding skills, I can create
          applications for Web / Desktop / Mobile, prototype projects, and
          design database structures and algorithms.
        </TextP>
        <TextP>
          Sometimes, I also like to write stuff and publish it here, for others
          to read / enjoy / criticize.
        </TextP>
      </LeftParagraph>
    </Row>
    <Spacer height="10rem" />
    <Cover>
      <CoverImage src="./space.jpg" alt="" />
      <CoverContent>
        <Spacer height="1rem" />
        <Hero color="white">Above and beyond</Hero>
        <Spacer height="1rem" />
        <Row>
          <RightParagraph>
            <Floater inverted>
              <TextP>
                My school taught me a lot regarding not only programming, but
                understanding the deeper meanings and intentions, the workflows
                and design processes behind it.
              </TextP>
              <TextP>
                We were not only taught how to write in certain programming
                languages, but also about the internal functioning of computers,
                building and maintaining a computer network, and the
                considerations that go into planning a software project from
                scratch.
              </TextP>
              <TextP>
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
        <Spacer height="1rem" />
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
      <CoverImage src="./woodwork.jpg" alt="" />
      <CoverContent>
        <Spacer height="1rem" />
        <Hero color="white" inverted>
          How I do it
        </Hero>
        <Spacer height="1rem" />
        <Row>
          <LeftParagraph>
            <Floater inverted>
              <TextP>
                Everyone can learn coding like everyone can learn woodworking.
                It takes time and patience to succeed, and you can recognize
                sloppy craftmanship in an instant.
              </TextP>
              <TextP>
                That is why I never stop learning. You can always improve
                yourself, always learn more, always strive to be better. No one
                ever reaches perfection or absolute knowledge in a craft, but I
                might as well try.
              </TextP>
            </Floater>
          </LeftParagraph>
        </Row>
        <Spacer height="1rem" />
      </CoverContent>
    </Cover>
    <Spacer height="10rem" />
    <Row>
      <BigLink>
        My <a href="mailto:froald14@new.edvhtl.at">Email</a> /{' '}
        <a href="https://github.com/froehlichA">Github</a>
      </BigLink>
    </Row>
    <small>© 2018 - Alexander Fröhlich</small>
  </Theme>
);

export const query = graphql`
  query {
    space: file(relativePath: { eq: "space.jpg" }) {
      childImageSharp {
        fluid(grayscale: true) {
          src
        }
      }
    }
    woodwork: file(relativePath: { eq: "woodwork.jpg" }) {
      childImageSharp {
        fluid(grayscale: true) {
          src
        }
      }
    }
  }
`;
