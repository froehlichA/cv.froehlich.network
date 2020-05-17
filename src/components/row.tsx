import styled from "styled-components";

/**
 * A div with display: flex.
 * Displays children in column-reverse if mobile, in row if desktop.
 */
export default styled.div`
  display: flex;
  flex-direction: column-reverse;
  * {
    flex: 0 1 100%;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
