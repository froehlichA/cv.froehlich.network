import styled from "styled-components";

/**
 * Renders a div that spaces components apart from each other.
 * @param height - The height of the spacer.
 * @param colored - If the spacer has a background color.
 */
export default styled.div`
  margin-top: ${props => props.height || "3rem"};
  margin-bottom: ${props => (props.colored ? "5rem" : "0rem")};
  height: 10px;
  position: relative;
  left: -10vw;
  width: 100vw;
  ${props => props.colored && `background-color: black;`}
  z-index: -1;
`;