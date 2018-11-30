import React, { Component } from "react";
import { connect } from "react-redux";
import { themeSwitch } from "./Actions";
import projects from "./projectdata";
import { Route, Link } from "react-router-dom";
import {
  MiddleSection,
  Sidebar,
  TopBar,
  Tag,
  DownloadButton,
  Overview,
  PrimaryButton,
  Header,
  FlexDivColumn,
  Projects,
  SectionHeader,
  MiniBox,
  MiniButtons,
  ViewProjectButton
} from "./Components/StyledComponents/StyledComponents";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import {
  TimelineMax,
  CSSPlugin,
  ScrollToPlugin,
  TweenLite,
  Power4,
  Sine
} from "gsap/all";
import GSAP from "react-gsap-enhancer";
import ProjectList from "./Components/ProjectList";
import { Messages } from "primereact/messages";
import { Message } from "primereact/message";

let hue = 0;
let plugins = [ScrollToPlugin, CSSPlugin];
//usually the problem when GSAP plugins arent working. add this line!

const MyBtn = styled(ViewProjectButton)`
  font-size: 30px;
`;

const SubHeader = Header.extend`
  color: #8360c3;
  font-family: "Oswald", Sans-Serif;
  font-size: 26px;
  line-height: 30px;
  text-align: right;
  position: absolute;
  top: 175px;
  text-shadow: none;
  @media (max-width: 800px) {
    font-size: 16px;
    top: 130px;
  }
`;
const ParagraphHeader = Header.extend`
  color: #00dbde;
  font-family: "Oswald", Sans-Serif;
  font-size: 32px;
  line-height: 30px;
  text-align: right;
  position: relative;
  right: 0;
`;

const MyButtons = styled(MiniButtons)`
  margin: 20px;
  border: none;
  display: flex;
  justify-content: space-around;
  a {
    color: white;
  }
  &:hover {
    color: #8360c3;
  }
`;
const Paragraph = SubHeader.extend`
  color: #f1f1f1;
  font-family: "Quattrocento", Serif;
  font-size: 16px;
  width: 300px;
  font-weight: normal;
  text-align: right;
  position: absolute;
  top: 220px;
  text-shadow: 2px 5px 14px #000000, 2px 5px 14px #000000, 2px 5px 14px #000000,
    2px 5px 14px #000000, 2px 5px 14px #000000, 2px 5px 14px #000000,
    2px 5px 14px #000000;
  @media (max-width: 800px) {
    font-size: 16px;
    top: 160px;
    width: 250px;
  }
`;

const HoverRec = styled.div`
  position: absolute;
  top: 100px;
  left: 100px;
  width: 300px;
  height: 300px;
`;
// const createAnim = ({target}) => {
//   var minibox = target.find({name: 'minibox'})
//   return new TimelineMax()
//     .set(minibox, {
//       width: 1,
//       height: 1,
//       borderWidth:0
//     })
//     .to(minibox, 2, {
//        height: 500,
//        width: 300,
//        borderWidth: 0,
//        borderRadius: 10,
//      })

// }

//for API KEY: create a constants.js file, with an export for your google api key
//or create a variable below this line that stores your API key.

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: projects
    };
  }

  componentDidMount() {
    // this.addAnimation(createAnim)
    this.showWarn();
  }

  showWarn = () => {
    this.messages.show({
      severity: "warn",
      summary: "Warn Message",
      detail: `This site is under construction as of ${Date.now()}`
    });
  };

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
          <Messages ref={el => (this.messages = el)} />
          <HoverRec />

          {/* <TopBar/> */}
          <Header>
            YOUR COMPANY.
            <br />
            NEW HEIGHTS.
          </Header>
          <SubHeader>JJ ASHCRAFT // FULL-STACK DEVELOPER</SubHeader>
          <Paragraph>
            Currently, my work involves helping others with the look, feel and
            function of their online presence. I have the ability to both design
            and develop for my clients, although I prefer to handle the
            development side. I've worked with some of the latest frameworks
            including React/Redux, and I'm constantly on the hunt for new
            learning opportunities. When I'm not designing and coding, you can
            find me on the dropzone coaching and mentoring new skydivers.
            <br />
            <PrimaryButton onClick={this.scrollTween}>
              Current Projects
            </PrimaryButton>
            <DownloadButton>
              <a
                href="https://github.com/JJAshcraft/resume/blob/master/JJAshcraft_resume.pdf"
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
                  <i class="fab fa-linkedin" />
                </a>
              </MyBtn>

              <MyBtn>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/JJAshcraft"
                >
                  <i class="fab fa-github" />
                </a>
              </MyBtn>

              <MyBtn>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://medium.com/@jjashcraft"
                >
                  <i class="fab fa-medium" />
                </a>
              </MyBtn>

              <MyBtn>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/jjashcraft/"
                >
                  <i class="fab fa-instagram" />
                </a>
              </MyBtn>
            </MyButtons>
          </Paragraph>
        </Overview>
        <SectionHeader id="projects"> PROJECTS </SectionHeader>
        <Projects>
          {/* {this.state.projects.map(project => {
           return <MiniNote project={project} key={Date.now()}/>
         })}
          */}
          <ProjectList />
        </Projects>
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
