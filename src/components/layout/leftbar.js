import styled from "styled-components";

/**
 * Renders a fixed bar on the left side of the screen.
 */
export const Leftbar = styled.div`
  position: fixed;
  width: 60px;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: black;
  display: none;
  @media (min-width: 768px) {
    display: initial;
  }
`;

/**
 * Renders a container for correctly displaying items in the Leftbar
 */
export const LeftbarItem = styled.div`
  color: white;
  width: 20px;
  margin: 20px auto;
  font-size: 18px;
  text-align: center;
  vertical-align: middle;
  line-height: 20px;
  font-weight: bold;
`;