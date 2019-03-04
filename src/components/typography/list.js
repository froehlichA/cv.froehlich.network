import styled from "styled-components";

const resetToP = `
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.1px;
  line-height: 1.8;
`;

/**
 * Renders a simple ul element.
 */
export const List = styled.ul`
  padding-left: 0;
`;

/**
 * Renders a simple li element.
 * @param color - The color of the element.
 */
export const ListItem = styled.li`
  color: ${props => props.color || 'black'};
  ${resetToP}
`;