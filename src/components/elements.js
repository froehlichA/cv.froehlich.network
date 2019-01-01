import styled from 'styled-components';

export const Image = styled.img``;

export const BackgroundImage = styled.div`
  width: 100vw;
  margin-left: -10vw;
  z-index: -2;
  background-image: url("${props => props.src}");
  background-size: cover;
  background-repeat: no-repeat;
  overflow: auto;
`;

export const BackgroundImageContent = styled.div`
  color: white;
  position: relative;
  left: 10vw;
  width: 80vw;
  overflow: visible;
`;

export const Floater = styled.div`
  background: ${props => props.inverted ? 'black' : 'white'};
  color: ${props => props.inverted ? 'white' : 'black'};
  margin: 0px -10px;
  padding: 2px 10px;
  width: 100%;
`;