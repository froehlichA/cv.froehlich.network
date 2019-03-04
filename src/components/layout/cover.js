import styled from "styled-components";
import Img from "gatsby-image";

/**
 * Renders a div that has a greater width than normal content.
 */
export const Cover = styled.div`
  position: relative;
  width: 100vw;
  margin-left: -10vw;
  overflow: auto;
`;

/**
 * Provides a background image for a Cover component.
 */
export const CoverImage = styled(Img)`
  display: block;
  position: absolute !important;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
`;

/**
 * Renders content inside of a Cover component.
 */
export const CoverContent = styled.div`
  float: left;
  color: black;
  position: relative;
  left: 10vw;
  width: 80vw;
  overflow: visible;
`;

/**
 * Renders a floating black div with white text and white shadow to highlight specific elements.
 */
export const Floater = styled.div`
  background: black;
  box-shadow: 5px 5px white;
  color: black;
  margin: 0px -10px;
  padding: 2px 10px;
  width: 100%;
`;
