import React, { Component } from "react";
import { connect } from "react-redux";
import { themeSwitch } from "./Actions";
import projects from "./projectdata";
import { Tooltip } from "primereact/tooltip";
import {
  DownloadButton,
  Overview,
  PrimaryButton,
  Header,
  FlexDivColumn,
  SectionHeader,
  MiniButtons,
  ViewProjectButton
} from "./Components/StyledComponents/StyledComponents";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { CSSPlugin, ScrollToPlugin, TweenLite } from "gsap/all";
import GSAP from "react-gsap-enhancer";
import ProjectList from "./Components/ProjectList";

let hue = 0;
let plugins = [ScrollToPlugin, CSSPlugin];
//usually the problem when GSAP plugins arent working. add this line!

const MyBtn = styled(ViewProjectButton)`
  font-size: 2rem;
  width: 25%;
`;

const SubHeader = Header.extend`
  color: #8360c3;
  font-family: "Oswald", Sans-Serif;
  font-size: 1.5rem;
  line-height: 1.6rem;
  text-wrap: wrap;

  text-align: ;

  text-shadow: none;
  @media (max-width: 800px) {
    font-size: 1rem;
  }
  @media (max-width: 800px) {
    font-size: 1.5rem;
    width: 50%;
  }
`;

const MyButtons = styled.div`
  margin: 2%;
  border: none;
  display: flex;
  width: 30%;
  padding: 0 2% 0 14%;

  justify-content: space-around;
  a {
    color: white;
  }
  &:hover {
    color: #8360c3;
  }
  @media (min-width: 500px) {
    width: 30%;
    padding: 0 2% 0 0;
  }
`;
const Paragraph = styled.p`
  color: #f1f1f1;
  font-family: sans-serif;
  font-size: 1rem;
  width: 35%;
  font-weight: normal;
  text-align: left;
  line-height: 1.25;

  margin-bottom: 3%;
  text-shadow: 2px 5px 14px #000000, 2px 5px 14px #000000, 2px 5px 14px #000000,
    2px 5px 14px #000000, 2px 5px 14px #000000, 2px 5px 14px #000000,
    2px 5px 14px #000000;
  @media (max-width: 800px) {
    font-size: 1rem;
    width: 50%;
    margin-bottom: 10%;
  }
  @media (max-width: 500px) {
    font-size: 1rem;
    width: 70%;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: projects
    };
  }

  componentDidMount() {
    // this.addAnimation(createAnim)
  }

  onMouseMove = e => {
    console.log("x", e.screenX, "y", e.screenY);
    hue = Math.floor(Math.random() * 100);
    console.log("hue " + hue + " deg");
    this.setState({ x: e.screenX, y: e.screenY, hue: hue });
  };

  scrollTween = () => {
    console.log("tweening scroll");
    TweenLite.to(window, 1, { scrollTo: "#projects" });
  };

  //   imageChange = (e) => {
  //  this.addAnimation(changerAnim)
  //   }

  render() {
    return (
      <FlexDivColumn>
        <Overview>
          <Header>
            YOUR COMPANY.
            <br />
            NEW HEIGHTS.
          </Header>
          <SubHeader>JJ ASHCRAFT, FULL-STACK DEVELOPER</SubHeader>
          <Paragraph>
            Currently, my work involves helping businesses with the look, feel
            and function of their online presence. <br />
            <br /> I have the ability to both design and develop for my clients,
            although I prefer to handle the development side. I've worked with
            some of the latest frameworks including React/Redux, and I'm
            constantly on the hunt for new learning opportunities. When I'm not
            designing and coding, you can find me on the dropzone coaching and
            mentoring new skydivers.
            <br />
          </Paragraph>
          <PrimaryButton onClick={this.scrollTween}>
            Current Projects
          </PrimaryButton>
          <DownloadButton>
            <a
              href="https://drive.google.com/file/d/1I64aiTXx1g6V86_zVV7G2JlUNmgAx3qp/view"
              rel="noopener"
              target="_blank"
            >
              Download Resume
            </a>
          </DownloadButton>
          <MyButtons>
            <MyBtn>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/jjashcraft/"
              >
                <i className="fab fa-linkedin" />
              </a>
            </MyBtn>

            <MyBtn>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/JJAshcraft"
              >
                <i className="fab fa-github" />
              </a>
            </MyBtn>

            <MyBtn>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://medium.com/@jjashcraft"
              >
                <i className="fab fa-medium" />
              </a>
            </MyBtn>

            <MyBtn>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/jjashcraft/"
              >
                <i className="fab fa-instagram" />
              </a>
            </MyBtn>
          </MyButtons>
        </Overview>
        <SectionHeader id="projects"> PROJECTS </SectionHeader>

        <ProjectList />
      </FlexDivColumn>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projects,
    searchText: state.searchText,
    saveInProgress: state.saveInProgress
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { themeSwitch }
  )(GSAP()(App))
);
