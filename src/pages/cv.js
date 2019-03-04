import React from "react";
import { withPrefix } from "gatsby";
import Theme from "../themes/reading";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
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
    library.add(
      icons.faUser,
      icons.faGraduationCap,
      icons.faCertificate,
      icons.faAward,
      icons.faTerminal,
      icons.faLaptopCode
    );
    this.state = {
      selectedButton: "user",
      buttons: {
        user: "General",
        "graduation-cap": "Education",
        award: "Certificates",
        terminal: "Experience",
        "laptop-code": "Projects"
      }
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
            {Object.keys(this.state.buttons).map(button => (
              <div key={button}>
                <IconButton
                  onClick={() => this.setState({ selectedButton: button })}
                >
                  <Icon icon={button} fixedWidth />
                </IconButton>
              </div>
            ))}
          </CenterContent>
        </Row>
        <Row>
          <Header>{this.state.buttons[this.state.selectedButton]}</Header>
        </Row>
        <Row>
          <Blacktext style={{ display: this.isSelected("user") ? "" : "none" }}>
            <ListTable>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>Alexander Fröhlich</td>
                </tr>
                <tr>
                  <td>Occupation</td>
                  <td>
                    Student at HTBLA Kaindorf
                    <br />
                    Graduation Date: June 2019
                  </td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>Gasselsdorf - Deutschlandsberg - Styria - Austria</td>
                </tr>
                <tr>
                  <td>Mail</td>
                  <td>
                    <a href="mailto:alexander.froehlich.at@gmail.com">
                      alexander.froehlich.at@gmail.com
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
            style={{ display: this.isSelected("graduation-cap") ? "" : "none" }}
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
            style={{ display: this.isSelected("award") ? "" : "none" }}
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
            style={{ display: this.isSelected("terminal") ? "" : "none" }}
          >
            <ListTable>
              <tbody>
                <tr>
                  <td>Frontend Programming</td>
                  <td>
                    <ul>
                      <li>HTML, CSS, and JS</li>
                      <li>Frameworks such as Angular, React & VueJS</li>
                      <li>Buildtools like Gulp & Webpack</li>
                      <li>Typescript</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Backend Programming</td>
                  <td>
                    <ul>
                      <li>NodeJS Backend with Express & NestJS</li>
                      <li>Java Backend with Spring</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>App Development</td>
                  <td>
                    <ul>
                      <li>Development with React Native & Flutter</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Other languages</td>
                  <td>
                    <ul>
                      <li>C#, C++, C</li>
                      <li>Python</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Databases</td>
                  <td>
                    <ul>
                      <li>Relational Databases with PostgreSQL and Oracle</li>
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
                      <li>Networking with Cisco Devices</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </ListTable>
          </Blacktext>
          <Blacktext
            style={{ display: this.isSelected("laptop-code") ? "" : "none" }}
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
                    A static website, used as a my own personal website, project
                    showcase and blogging platform. More details{" "}
                    <a href="https://github.com/froehlichA/portfolio">here.</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://mattr.netlify.com/c/general">Mattr Chat</a>
                  </td>
                  <td>A real-time chat build using Angular and websockets.</td>
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
