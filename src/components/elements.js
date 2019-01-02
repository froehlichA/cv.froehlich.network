import styled from 'styled-components';
import Img from 'gatsby-image';

export const Cover = styled.div`
  position: relative;
  width: 100vw;
  margin-left: -10vw;
  overflow: auto;
`;

export const CoverImage = styled(Img)`
  display: block;
  position: absolute !important;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
`;

export const CoverContent = styled.div`
  float: left;
  color: ${props => props.theme.bg};
  position: relative;
  left: 10vw;
  width: 80vw;
  overflow: visible;
`;

export const Floater = styled.div`
  background: ${props => props.theme.fg};
  box-shadow: 5px 5px ${props => props.theme.bg};
  color: ${props => props.theme.bg};
  margin: 0px -10px;
  padding: 2px 10px;
  width: 100%;
`;

export const FloatingButton = styled.button`
  position: fixed;
  right: 30px;
  top: 30px;
  width: 50px;
  height: 50px;
  border: 2px solid ${props => props.theme.fg};
  box-shadow: 2px 2px ${props => props.theme.fg};
  background-color: ${props => props.theme.bg};
  padding: 5px;
  cursor: pointer;
  -webkit-appearance: none;
  :focus {
    outline: 0;
  }
  :hover {
    background-color: ${props => props.theme.lightbg};
  }
  :active {
    background-color: ${props => props.theme.lightfg};
    right: 28px;
    top: 32px;
    box-shadow: 0px 0px ${props => props.theme.fg};
  }
  display: none;
  @media (min-width: 768px) {
    display: initial;
  }
`;
