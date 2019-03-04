import styled from "styled-components";

/**
 * Renders a fixed background which spans the whole page.
 */
export default styled.div`
  background-color: white;
  position: absolute;
  top: 0px;
  z-index: -1000;
  min-height: 100vh;
  width: 100vw;
  left: 0vw;
  @media (min-width: 768px) {
    left: 4vw;
    width: 96vw;
  }
`;