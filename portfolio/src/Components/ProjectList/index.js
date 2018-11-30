import React, { Component } from "react";
import "./ProjectList.css";
import { connect } from "react-redux";
import projects from "../../projectdata";
import {
  MiniBox,
  TruncatedText,
  MaskText,
  Title,
  Tag,
  FGitHubButton,
  BGitHubButton,
  DownloadButton,
  ViewProjectButton,
  FGitHubDisabled,
  BGitHubDisabled,
  MiniButtons
} from "../StyledComponents/StyledComponents";

import styled from "styled-components";

const ProjectTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;

  white-space: nowrap;
  margin: 5px;
  @media (max-width: 1100px) {
    text-align: center;
  }
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  @media (max-width: 1100px) {
    text-align: center;
  }
`;

const ProjectImage = styled.img`
  max-width: 300px;
  @media (max-width: 1024px) {
    align-self: center;
  }
`;

const Card = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;

  padding: 12px;
  border: 1px solid white;

  background: white;
  color: #323232;
  width: 100%;
  margin: 0 auto;
  box-shadow: inset 0 -15px 10px -10px #0000001e;
  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Thirty = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
  width: 40%;
  margin 0 auto;
  @media (max-width: 1100px) {
    width: 40%;
    margin: 0 auto;
    padding: 20px;
  }
   @media (max-width: 700px) {
    width: 90%;
    margin: 0;
    padding: 20px;
  }
`;

const Seventy = styled.div`
  width: 70%;
  padding: 20px;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class ProjectList extends Component {
  empty() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 style={{ color: "white" }}>Add a new Conversation</h1>
        <button className="custom-btn" style={{ alignSelf: "center" }}>
          NEW
        </button>
      </div>
    );
  }
  // Will break this down into a Card component
  card(project) {
    const small = project.thumb;
    console.log(small);
    const large = project.large;
    return (
      <Card>
        <Thirty>
          <ProjectImage
            src={small} // srcSet={`${large} 200w, ${small} 1024w`}
            alt=""
          />
          <TagContainer>
            {project.tech.map(tech => {
              return <Tag>{tech}</Tag>;
            })}
          </TagContainer>
        </Thirty>

        <Thirty>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <MiniButtons>
            <ViewProjectButton>
              <a target="_blank" rel="noopener" href={project.link}>
                <i class="fas fa-external-link-alt" />
              </a>
            </ViewProjectButton>

            {project.frontend_repo ? (
              <FGitHubButton>
                <a target="_blank" rel="noopener" href={project.frontend_repo}>
                  <i class="fas fa-desktop" />
                </a>
              </FGitHubButton>
            ) : (
              <FGitHubDisabled>
                <a target="_blank" rel="noopener" href={project.frontend_repo}>
                  <i class="fas fa-desktop" />
                </a>
              </FGitHubDisabled>
            )}
            {project.backend_repo ? (
              <BGitHubButton>
                <a target="_blank" rel="noopener" href={project.backend_repo}>
                  <i class="fas fa-code" />
                </a>
              </BGitHubButton>
            ) : (
              <BGitHubDisabled>
                <a target="_blank" rel="noopener" href={project.frontend_repo}>
                  <i class="fas fa-code" />
                </a>
              </BGitHubDisabled>
            )}
          </MiniButtons>
        </Thirty>
      </Card>
    );
  }
  render() {
    return (
      <React.Fragment>
        <div className="list">
          {projects.map(project => {
            // Will replace this with a Card component
            return this.card(project);
          })}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps)(ProjectList);
