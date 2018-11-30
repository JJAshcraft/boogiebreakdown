import styled from "styled-components";

export const FlexNotes = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  overfly-x: hidden;
  overflow-y: auto;
  height: auto;
`;
export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40vw;
  height: 30vh;
  background-color: white;
  color: black;
`;
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
  position: relative;

  font-size: 12px;
  a {
    &:hover {
      color: #2ebf91; !important;
      cursor: pointer;
    }
  }
  grid-row: 1;
  grid-column: 1;
`;

export const MiddleSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const Overview = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: black;
  background: url("wingsuitcover.jpg") no-repeat top center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  @media (max-width: 800px) {
    background: url("wingsuitcover.jpg") no-repeat top center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`;
export const Projects = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  min-width: 300px;
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

export const FlexDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  width: 50%;
  height: 80vh;
  overfly-x: hidden;
  overflow-y: auto;
  justify-content: space-around;

  @media (max-width: 900px) {
    background: none;
    box-shadow: none;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;
export const FlexDivColumn = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  background: black;
  justify-content: center;
  width: 100%;
  max-width: 1100px;

  overfly-x: hidden;
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
  margin-top: 10px;
  display: flex;
  outline: none;
  justify-content: center;
  align-items: center;
  background: #2ebf91;

  color: white;
  min-width: 75px;
  width: 100%;
  border: none;
  font-size: 16px;
  height: 30px;
  cursor: pointer;
  border-radius: 5px;
`;
export const LogoutButton = styled.button`
  margin-top: 10px;
  display: flex;
  outline: none;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: white;
  min-width: 75px;
  width: 100%;
  border: none;
  font-size: 16px;
  height: 30px;
  cursor: pointer;
`;

export const MiniButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 30px;
  grid-gap: 2px;
  grid-column: 1;
  grid-row: 4;
  margin-bottom: 20px;
  border: 1px solid grey;
`;

export const Header = styled.span`
  font-weight: bold;
  position: absolute;
  top: 20px;
  right: 50px;
  width: 450px;
  text-wrap: wrap;
  padding: 20px 10px 0 10px;
  color: #ffffff;
  font-family: "Oswald", Sans-Serif;
  font-size: 72px;
  line-height: 74px;
  text-align: right;
  @media (max-width: 800px) {
    font-size: 40px;
    line-height: 1.25;
  }
`;
export const SectionHeader = styled.span`
  font-weight: bold;
  z-index: 30;
  top: -5px;
  color: #ffffff;
  font-family: "Oswald", Sans-Serif;
  font-size: 78px;
  line-height: 70px;
  background: none;
`;

export const LinkBar = styled.span`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: grey;
  padding-left: 20px;
  padding-right: 10px;
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
  padding: 5px;
  border-radius: 5px;
  background: #8360c3;
  margin: 5px;
  font-size: 12px;
`;
