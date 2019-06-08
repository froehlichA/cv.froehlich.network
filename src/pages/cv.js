import React from "react";
import { withPrefix } from "gatsby";
import Theme from "../themes/reading";
import {
  FaUser,
  FaGraduationCap,
  FaAward,
  FaTerminal,
  FaLaptopCode
} from "react-icons/fa";
import styled from "styled-components";

import { Row } from "../components/layout/flex";
import Spacer from "../components/layout/spacer";
import IconButton from "../components/layout/iconButton";
import Header from "../components/typography/header";
import ListTable from "../components/layout/listTable";

const Blacktext = styled.div`
  width: 100%;
  border: 2px solid black;
  padding: 10px;
`;

const CenterContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  *:not(:last-child) {
    margin-right: 5px;
  }
  @media (min-width: 768px) {
    justify-content: start;
  }
`;

export default class CV extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedButton: "General",
      buttons: [
        { text: "General", icon: FaUser },
        { text: "Education", icon: FaGraduationCap },
        { text: "Certificates", icon: FaAward },
        { text: "Experience", icon: FaTerminal },
        { text: "Projects", icon: FaLaptopCode }
      ]
    };
    this.isSelected = this.isSelected.bind(this);
  }

  isSelected(name) {
    return this.state.selectedButton === name;
  }

  render() {
    return (
      <Theme>
        <Spacer height="2rem" />
        <Row>
          <CenterContent>
            {this.state.buttons.map(button => (
              <div key={button.icon}>
                <IconButton
                  onClick={() => this.setState({ selectedButton: button.text })}
                >
                  <button.icon />
                </IconButton>
              </div>
            ))}
          </CenterContent>
        </Row>
        <Row>
          <Header>
            {
              this.state.buttons.find(
                button => button.text === this.state.selectedButton
              ).text
            }
          </Header>
        </Row>
        <Row>
          <Blacktext
            style={{ display: this.isSelected("General") ? "" : "none" }}
          >
            <ListTable>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>Alexander Fröhlich</td>
                </tr>
                <tr>
                  <td>Occupation</td>
                  <td>
                    Graduate of HTBLA Kaindorf
                  </td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>Gasselsdorf - Deutschlandsberg - Styria - Austria</td>
                </tr>
                <tr>
                  <td>Mail</td>
                  <td>
                    <a href="mailto:froehlich.alexander@protonmail.com">
                      froehlich.alexander@protonmail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Github</td>
                  <td>
                    <a href="https://github.com/froehlichA">
                      https://github.com/froehlichA
                    </a>
                  </td>
                </tr>
              </tbody>
            </ListTable>
          </Blacktext>
          <Blacktext
            style={{ display: this.isSelected("Education") ? "" : "none" }}
          >
            <ListTable>
              <tbody>
                <tr>
                  <td>2014 - 2019</td>
                  <td>HTBLA Kaindorf</td>
                </tr>
                <tr>
                  <td>2010 - 2014</td>
                  <td>NMMS Eibiswald</td>
                </tr>
                <tr>
                  <td>2006 - 2010</td>
                  <td>VS St. Ulrich i. Greith</td>
                </tr>
              </tbody>
            </ListTable>
          </Blacktext>
          <Blacktext
            style={{ display: this.isSelected("Certificates") ? "" : "none" }}
          >
            <ListTable>
              <tbody>
                <tr>
                  <td>English</td>
                  <td>
                    <ul>
                      <li>
                        <a href={withPrefix("/files/English_CAE.pdf")}>
                          Cambridge English Advanced (CAE)
                        </a>
                      </li>
                      <li>
                        <a href={withPrefix("/files/English_BEC.pdf")}>
                          Cambridge English Business Vantage (BEC Vantage)
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Networks</td>
                  <td>
                    <ul>
                      <li>
                        <a href={withPrefix("/files/CCNA4.pdf")}>
                          CCNA Routing and Switching: Connecting Networks
                        </a>
                      </li>
                      <li>
                        <a href={withPrefix("/files/CCNA3.pdf")}>
                          CCNA Routing and Switching: Scaling Networks
                        </a>
                      </li>
                      <li>
                        <a href={withPrefix("/files/CCNA2_noSignature.pdf")}>
                          CCNA Routing and Switching: Routing and Switching
                          Essentials
                        </a>
                      </li>
                      <li>
                        <a href={withPrefix("/files/CCNA1.pdf")}>
                          CCNA Routing and Switching: Introduction to Networks
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </ListTable>
            <b>Awards</b>
            <ListTable>
              <tbody>
                <tr>
                  <td>IT Security</td>
                  <td>
                    <ul>
                      <li>
                        <a href={withPrefix("/files/KaindorfCTF1.pdf")}>
                          Kaindorf School CTF 2018 - 2nd Place
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </ListTable>
          </Blacktext>
          <Blacktext
            style={{ display: this.isSelected("Experience") ? "" : "none" }}
          >
            <small>
              Technologies / Libraries / Frameworks I've worked with extensively
              are highlighted bold.
            </small>
            <ListTable>
              <tbody>
                <tr>
                  <td>Frontend Programming</td>
                  <td>
                    <ul>
                      <li>
                        <b>HTML</b> / <b>CSS</b> / <b>Javascript</b> /{" "}
                        <b>Typescript</b> / <b>SASS</b> / Less
                      </li>
                      <li>
                        CSS Frameworks (<b>Bootstrap</b> & SemanticUI)
                      </li>
                      <li>
                        JS Frameworks (<b>Angular</b>, <b>React</b> &{" "}
                        <b>VueJS</b>)
                      </li>
                      <li>
                        Buildtools (Gulp & <b>Webpack</b>)
                      </li>
                      <li>
                        State Management (Redux for React & <b>VueX</b>{" "}
                        for VueJS)
                      </li>
                      <li>
                        Unit- and Integration Testing (<b>Mocha</b>, <b>Jest</b>{" "}
                        & Karma)
                      </li>
                      <li>
                        <b>Progressive Web Apps</b> with Service Workers
                      </li>
                      <li>
                        <b>Server Side Rendering</b> /{" "}
                        <b>Client Side Rendering</b> /{" "}
                        <b>Static Site Generators</b>
                      </li>
                      <li>Desktop Applications (Electron)</li>
                      <li>
                        Mobile Applications (React Native, IonicJS &{" "}
                        <b>Flutter</b>)
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Backend Programming</td>
                  <td>
                    <ul>
                      <li>
                        NodeJS Backend with <b>Express</b> & NestJS
                      </li>
                      <li>PHP Backend with Laravel and CakePHP</li>
                      <li>Java Backend with Spring</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Other languages</td>
                  <td>
                    <ul>
                      <li>C#, C++, C</li>
                      <li>
                        Python
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Databases</td>
                  <td>
                    <ul>
                      <li>
                        Relational Databases with PostgreSQL and <b>Oracle</b>
                      </li>
                      <li>Redis</li>
                      <li>MongoDB</li>
                      <li>Neo4J</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Network Management</td>
                  <td>
                    <ul>
                      <li>
                        <b>Networking with Cisco Devices</b>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </ListTable>
          </Blacktext>
          <Blacktext
            style={{ display: this.isSelected("Projects") ? "" : "none" }}
          >
            <ListTable>
              <tbody>
                <tr>
                  <td>
                    <a href="https://alexanderfroehlich.me">
                      alexanderfroehlich.me
                    </a>
                  </td>
                  <td>
                    A static website, made with React and GatsbyJS, used as a my
                    own personal website, project showcase and blogging
                    platform. More details{" "}
                    <a href="https://github.com/froehlichA/portfolio">here.</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://mattr.netlify.com/c/general">Mattr Chat</a>
                  </td>
                  <td>A real-time chat built using Angular and websockets.</td>
                </tr>
                <tr>
                  <td>
                    <a href="https://todomy.netlify.com">TodoMy</a>
                  </td>
                  <td>A simple ToDo app, using Vue and Vuex.</td>
                </tr>
              </tbody>
            </ListTable>
          </Blacktext>
        </Row>
      </Theme>
    );
  }
}
