import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

export default styled.a<{ simple?: boolean }>`
  color: ${props => (props.simple ? "inherit" : "lightblue")};
  &:hover {
    color: ${props => (props.simple ? "#afafaf" : "skyblue")};
  }
`;

export const Link = styled(GatsbyLink)<{ simple?: boolean }>`
  color: ${props => (props.simple ? "inherit" : "lightblue")};
  &:hover {
    color: ${props => (props.simple ? "#afafaf" : "skyblue")};
  }
`;
