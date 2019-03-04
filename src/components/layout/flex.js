import React from 'react';

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
  const calcMod = mod || "sm";
  const calcWidth = `col-${calcMod}-${width}`;
  const calcOffset = offset ? `col-${calcMod}-offset-${offset}` : "";
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
