import React from 'react';
import styled from 'styled-components';

export const Content = styled.div`
  background-color: ${props => props.theme.bg};
  width: 96vw;
  position: absolute;
  top: 0px;
  left: 4vw;
  z-index: -1000;
  min-height: 100vh;
`;

export const Container = styled.div`
  margin: 100px auto;
  width: 80vw;
`;

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

export const Row = ({ children }) => (
  <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>
    {children}
  </div>
);
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
export const LeftColumn = props => <Column width="3" {...props} />;
export const RightColumn = props => <Column width="3" offset="2" {...props} />;
export const LeftParagraph = props => <Column width="4" {...props} />;
export const RightParagraph = props => (
  <Column width="4" offset="5" {...props} />
);

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
