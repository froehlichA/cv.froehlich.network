import styled from "styled-components";

/**
 * Renders a big title.
 * @param inverted - If the Hero should render white with a black outline.
 * @param shadow - If the Hero has a shadow
 */
export default styled.h1`
  color: ${props => props.color || 'black'};
  font-weight: bold;
  ${props =>
    props.inverted &&
    `
    -webkit-text-fill-color: white;
    -webkit-text-stroke: 2px black;
  `}
  margin: 0.2rem 0px 0.2rem -5px;
  font-size: 38px;
  ${props => props.shadow && `text-shadow: 5px 5px black`};
  @media (min-width: 350px) {
    font-size: 56px;
  }
  @media (min-width: 750px) {
    font-size: 70px;
  }
`;