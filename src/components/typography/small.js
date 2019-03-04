import styled from "styled-components";

/**
 * Renders a simple small element.
 * @param color - The color of the element.
 */
export default styled.small`
  color: ${props => props.color || 'black'};
`;