import styled from "styled-components";
import { Link } from "gatsby";

/**
 * Renders a container for bold links, providing the black background.
 */
export const BoldLinkContainer = styled.div`
  display: inline-block;
  background-color: black;
  color: white;
  padding: 5px 10px;
  margin-bottom: 30px;
`;

/**
 * Renders a link to another page.
 */
export const BoldLink = styled(Link)`
  font-weight: bold;
  font-size: 18px;
  color: inherit;
  text-decoration: none;
`;