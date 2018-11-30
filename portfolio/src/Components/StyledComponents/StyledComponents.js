import styled from "styled-components";

export const FGitHubButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: none;
  position: relative;

  font-size: 12px;
  a {
    &:hover {
      color: #2ebf91; !important;
    }
  }
  grid-row: 1;
  grid-column: 2;
`;

export const BGitHubButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: none;
  position: relative;

  font-size: 12px;
  a {
    &:hover {
      color: #2ebf91; !important;
    }
  }
  grid-row: 1;
  grid-column: 3;
`;

export const FGitHubDisabled = styled(FGitHubButton)`
  opacity: 0.35;
  a {
    color: grey;
    cursor: not-allowed;
  }
`;

export const BGitHubDisabled = styled(BGitHubButton)`
  opacity: 0.35;
  a {
    color: grey;
    cursor: not-allowed;
  }
`;
export const ViewProjectButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: none;
  font-size: 12px;
  a {
    &:hover {
      color: #2ebf91; !important;
      cursor: pointer;
    }
  }
`;

export const Overview = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  max-width: 1100px;
  padding-top: 5%;
  padding-bottom: 7%;
  background: url("wingsuitcover.jpg") no-repeat top right local;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  @media (max-width: 1100px) {
    background: url("wingsuitcover.jpg") no-repeat top center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    padding: 5%;
  }
  @media (max-width: 500px) {
    background: url("wingsuitcover.jpg") no-repeat top center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    margin-bottom: 20%;
    padding-left: 7%;
    width: 100%;
  }
`;
export const Projects = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  margin: 0 auto;

  background: #8360c3; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #2ebf91,
    #8360c3
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #2ebf91,
    #8360c3
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const FlexDivColumn = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: flex-end;
  background: black;
  justify-content: center;
  margin: 0 auto;
  max-width: 100%;
  @media (min-width: 1100px) {
    max-width: 80%;
  }
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom-left-radius: 10px;
  width: 20%;
  height: 80vh;
  background-color: #262626;
  @media (max-width: 500px) {
    visibility: hidden;
  }
`;
export const TopBar = styled.div`
  position: absolute;
  z-index: 25;
  display: flex;
  top: 740px;
  left: 0;
  align-items: center;
  justify-content: space-between;
  height: 54px;
  width: 30vw;
  border-radius: 40%;
  background-color: #07afb8;
`;

export const MiniBox = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  background-color: white;
  padding: 5px;
  flex-direction: row;
  margin: 5px;

  @media (max-width: 900px) {
  }
`;

export const TruncatedText = styled.p`
  position: relative;
  whitespace: pre-wrap;
  overflow-wrap: break-word;
  overflow: hidden;
  z-index: 5;
`;
export const Title = styled.h3`
  text-align: left;
`;

export const MaskText = styled.div`
  width: 100%;
  height: 70px;

  z-index: 10;
  position: absolute;
  bottom: 0;
  right: 0;
  background: rgba(255, 255, 255, 0);
  background: -moz-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.55) 25%,
    rgba(255, 255, 255, 0.73) 33%,
    rgba(255, 255, 255, 1) 63%,
    rgba(255, 255, 255, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(255, 255, 255, 0)),
    color-stop(25%, rgba(255, 255, 255, 0.55)),
    color-stop(33%, rgba(255, 255, 255, 0.73)),
    color-stop(63%, rgba(255, 255, 255, 1)),
    color-stop(100%, rgba(255, 255, 255, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.55) 25%,
    rgba(255, 255, 255, 0.73) 33%,
    rgba(255, 255, 255, 1) 63%,
    rgba(255, 255, 255, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.55) 25%,
    rgba(255, 255, 255, 0.73) 33%,
    rgba(255, 255, 255, 1) 63%,
    rgba(255, 255, 255, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.55) 25%,
    rgba(255, 255, 255, 0.73) 33%,
    rgba(255, 255, 255, 1) 63%,
    rgba(255, 255, 255, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.55) 25%,
    rgba(255, 255, 255, 0.73) 33%,
    rgba(255, 255, 255, 1) 63%,
    rgba(255, 255, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ffffff', GradientType=0 );
`;

export const PrimaryButton = styled.button`
  margin-top: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2ebf91;
  width: 70%;
  height: 25%;
  padding: 1%;
  color: white;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 2%;
  margin-bottom: 1%;
  @media (min-width: 500px) {
    width: 50%;
    margin-right: 1%;
    margin-bottom: 1%;
    margin-top: 2%;
    height: 40%;
  }
  @media (min-width: 800px) {
    width: 35%;
    margin-right: 1%;
    margin-bottom: 1%;
    margin-top: 1%;
    height: 40%;
  }
`;

export const MiniButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 20%;
  grid-gap: 2px;
  grid-column: 1;
  grid-row: 4;
  margin-bottom: 1%;
  margin-top: 1%;
  padding: 3%;
  border: 1px solid grey;
`;

export const Header = styled.span`
  font-weight: bold;
  font-family: "Oswald", Sans-Serif;
  text-wrap: wrap;
margin-bottom: 2%
  color: #ffffff;
  font-family: "Oswald", Sans-Serif;
  font-size: 4.5rem;
  line-height: 5rem;
  text-align: left;
  @media (max-width: 800px) {
    font-size: 3rem;
    line-height: 1.25;
  }
   @media (max-width: 400px) {
    font-size: 2rem;
    line-height: 1.25;
  }
`;
export const SectionHeader = styled.span`
  font-weight: bold;
  z-index: 30;
  width: 100%;
  color: #ffffff;
  font-family: "Oswald", Sans-Serif;
  font-size: 4.5rem;
  margin-bottom: -0.5%;
  background: none;
  @media (min-width: 500px) {
    color: #ffffff;
    font-family: "Oswald", Sans-Serif;
    background: none;
    position: relative;
  }
`;

export const DownloadButton = styled(PrimaryButton)`
  background: #8360c3;
  color: white;
  a {
    text-decoration: none;
    color: #ffffff;
  }
`;

export const Tag = styled.span`
  color: #ffffff;
  padding: 2%;
  font-family: Sans-Serif;
  border-radius: 5px;
  background: #8360c3;
  margin: 1%;
  font-size: 0.75rem;
  white-space: nowrap;
`;
