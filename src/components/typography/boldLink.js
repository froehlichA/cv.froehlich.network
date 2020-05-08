import styled from "styled-components";
import { Link } from "gatsby";

/**
 * Renders a container for bold links, providing the black background.
 */
export const BoldLinkContainer = styled.div`
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 30px;
  background-color: grey;
`;

/**
 * Renders a link to another page.
 */
export const BoldLink = styled(Link)`
  background-color: black;
  color: white;
  padding: 4px 12px;
  font-size: 24px;
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;