import styled from "styled-components";

/**
 * Renders a container with even less width, for blog posts.
 */
export default styled.div`
  margin: auto;
  width: 80vw;
  @media (min-width: 768px) {
    width: 60vw;
  }
`;