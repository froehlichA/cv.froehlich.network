import styled from "styled-components";

export default styled.h1<{ color?: string }>`
  font-size: inherit;
  font-weight: normal;
  margin-bottom: 0px;
  color: ${props => props.color || "inherit"}; 
`;
