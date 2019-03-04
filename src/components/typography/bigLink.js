import styled from "styled-components";

/**
 * Renders text with an increased font size.
 * @param color - Color of the Link.
 */
export default styled.p`
  color: ${props => props.color || 'black'};
  font-size: 42px;
  font-weight: bold;
`;