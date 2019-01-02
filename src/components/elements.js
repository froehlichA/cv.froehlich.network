import styled from 'styled-components';
import Img from 'gatsby-image';

export const Cover = styled.div`
  position: relative;
  width: 100vw;
  margin-left: -10vw;
  z-index: -2;
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
  color: white;
  position: relative;
  left: 10vw;
  width: 80vw;
  overflow: visible;
`;

export const Floater = styled.div`
  background: ${props => (props.inverted ? 'black' : 'white')};
  box-shadow: 5px 5px ${props => (props.inverted ? 'white' : 'black')};
  color: ${props => (props.inverted ? 'white' : 'black')};
  margin: 0px -10px;
  padding: 2px 10px;
  width: 100%;
`;
