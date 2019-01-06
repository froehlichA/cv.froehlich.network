import React from 'react';
import styled from 'styled-components';

/**
 * Renders a fixed background. Spans the whole page.
 */
export const Background = styled.div`
  background-color: ${props => props.theme.bg};
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

/**
 * Renders child elements, with decreased width for easier reading.
 */
export const Container = styled.div`
  margin: 100px auto;
  width: 80vw;
`;

/**
 * Renders a div that spaces components apart from each other.
 */
export const Spacer = styled.div`
  margin-top: ${props => props.height || '3rem'};
  margin-bottom: ${props => (props.colored ? '5rem' : '0rem')};
  height: 10px;
  position: relative;
  left: -10vw;
  width: 100vw;
  ${props => props.colored && `background-color: ${props.theme.fg};`}
  z-index: -1;
`;

/**
 * Renders a flex-layout row.
 * @param children - The components to render inside.
 */
export const Row = ({ children }) => (
  <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>
    {children}
  </div>
);

/**
 * Renders a flex-layout column.
 * @param children - The components to render inside.
 * @param width - The width of the column.
 * @param offset - The left offset (margin).
 * @param mod - The modifier of the mobile breakpoints (one of xs, sm, md, lg)
 */
export const Column = ({ children, width, offset, mod }) => {
  const calcMod = mod || 'sm';
  const calcWidth = `col-${calcMod}-${width}`;
  const calcOffset = offset ? `col-${calcMod}-offset-${offset}` : '';
  return (
    <div className={`${calcWidth} ${calcOffset}`} style={{ padding: 0 }}>
      {children}
    </div>
  );
};

/**
 * Wrapper component for displaying a small column.
 * Passes all props down to Column.
 */
export const LeftColumn = props => <Column width="3" {...props} />;

/**
 * Wrapper component for displaying a small column on the right side of the screen.
 * Passes all props down to Column.
 */
export const RightColumn = props => <Column width="3" offset="2" {...props} />;

/**
 * Wrapper component for displaying a large column.
 * Passes all props down to Column.
 */
export const LeftParagraph = props => <Column width="4" {...props} />;

/**
 * Wrapper component for displaying a large column on the right side of the screen.
 * Passes all props down to Column.
 */
export const RightParagraph = props => (
  <Column width="4" offset="5" {...props} />
);

/**
 * Renders a fixed bar on the left side of the screen.
 */
export const Leftbar = styled.div`
  position: fixed;
  width: 4vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.fg};
  display: none;
  @media (min-width: 768px) {
    display: initial;
  }
`;

/**
 * Renders a container for correctly displaying items in the Leftbar
 */
export const LeftbarItem = styled.div`
  color: ${props => props.theme.bg};
  width: 20px;
  margin: 20px auto;
  font-size: 18px;
  text-align: center;
  vertical-align: middle;
  line-height: 20px;
  font-weight: bold;
`;
