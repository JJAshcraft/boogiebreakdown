import React, { Component, Fragment } from "react";

import {
  Tag,
  FGitHubButton,
  BGitHubButton,
  ViewProjectButton,
  FGitHubDisabled,
  BGitHubDisabled,
  MiniButtons
} from "../Components/StyledComponents/StyledComponents";

import styled from "styled-components";

const ProjectTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  font-family: "Oswald", Sans-Serif;
  margin-bottom: 2%;
  white-space: nowrap;

  @media (max-width: 1100px) {
    text-align: center;
    font-size: 2rem;
  }
  @media (max-width: 500px) {
    text-align: center;
    font-size: 1.5rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  font-family: Sans-Serif;
  margin-bottom: 3%;
  margin-top: 3%;
  @media (max-width: 1100px) {
    text-align: center;
  }
`;

const ProjectImage = styled.img`
  max-width: 100%;
  text-align: center;
  padding-bottom: 2%;
  @media (max-width: 1024px) {
    align-self: center;
    width: auto;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;

  padding: 2%;
  border: 1px solid white;
  background: white;
  color: #323232;
  margin: 0 auto;

  box-shadow: inset 0 -15px 10px -10px #0000001e;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Thirty = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
 padding: 2%;
  width: 40%;
  margin 0 auto;
  @media (max-width: 1100px) {
    width: 40%;
    margin: 0 auto;
    padding: 1%;
  }
   @media (max-width: 700px) {
    width: 80%;
    margin: 0 auto;

   
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const small = this.props.project.thumb;
    console.log(small);
    const large = this.props.project.large;
    // srcSet=
    // { `${large} 200w, ${small} 1024w` }
    return (
      <CardContainer>
        <Thirty>
          <ProjectImage src={small} alt="" />

          <TagContainer>
            {this.props.project.tech.map(tech => {
              return <Tag>{tech}</Tag>;
            })}
          </TagContainer>
        </Thirty>

        <Thirty>
          <ProjectTitle>{this.props.project.title}</ProjectTitle>
          <ProjectDescription>
            {this.props.project.description}
          </ProjectDescription>
          <MiniButtons>
            <ViewProjectButton>
              <a target="_blank" rel="noopener" href={this.props.project.link}>
                <i className="fas fa-external-link-alt" />
              </a>
            </ViewProjectButton>

            {this.props.project.frontend_repo ? (
              <FGitHubButton>
                <a
                  target="_blank"
                  rel="noopener"
                  href={this.props.project.frontend_repo}
                >
                  <i className="fas fa-desktop" />
                </a>
              </FGitHubButton>
            ) : (
              <FGitHubDisabled>
                <a
                  target="_blank"
                  rel="noopener"
                  href={this.props.project.frontend_repo}
                >
                  <i class="fas fa-desktop" />
                </a>
              </FGitHubDisabled>
            )}
            {this.props.project.backend_repo ? (
              <BGitHubButton>
                <a
                  target="_blank"
                  rel="noopener"
                  href={this.props.project.backend_repo}
                >
                  <i className="fas fa-code" />
                </a>
              </BGitHubButton>
            ) : (
              <BGitHubDisabled>
                <a
                  target="_blank"
                  rel="noopener"
                  href={this.props.project.frontend_repo}
                >
                  <i className="fas fa-code" />
                </a>
              </BGitHubDisabled>
            )}
          </MiniButtons>
        </Thirty>
      </CardContainer>
    );
  }
}

export default Card;
