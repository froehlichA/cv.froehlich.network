import styled from "styled-components";

export default styled.div<{ size: number }>`
  width: ${props => props.size}px;
  height:  ${props => props.size}px;
  margin: auto;
`;
