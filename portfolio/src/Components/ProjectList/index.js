import React, { Component } from "react";
import { connect } from "react-redux";
import projects from "../../projectdata";
import Card from "../Card";

import styled from "styled-components";

const List = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  background-color: #1e1d1e;
`;

class ProjectList extends Component {
  // Will break this down into a Card component
  // card(project) {
  //   const small = project.thumb;
  //   console.log(small);
  //   const large = project.large;
  //   return <Card />;
  // }
  render() {
    return (
      <List>
        {projects.map(project => {
          return <Card project={project} />;
        })}
      </List>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps)(ProjectList);
