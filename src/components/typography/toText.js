import styled from "styled-components";

const resetToP = `
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.1px;
  line-height: 1.8;
`;

/**
 * Renders a simple h1 element.
 * @param color - The color of the element.
 */
export const TextH1 = styled.h1`
  color: ${props => props.color || "black"};
  ${resetToP}
  font-weight: bold;
`;

/**
 * Renders a simple h2 element.
 * @param color - The color of the element.
 */
export const TextH2 = styled.h2`
  color: ${props => props.color || "black"};
  ${resetToP}
`;

/**
 * Renders a simple p element.
 * @param inverted - If the element should be white instead of black.
 */
export const TextP = styled.p`
  color: ${props => (props.inverted ? "white" : "black")};
  ${resetToP}
`;
