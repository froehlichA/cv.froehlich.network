import styled from 'styled-components';

export const Hero = styled.h1`
  color: ${props => props.color ? props.color : 'black'};
  font-weight: bold;
  ${props => props.inverted && `
    -webkit-text-fill-color: white;
    -webkit-text-stroke: 2px black;
  `}
  margin: 0.2rem 0px 0.2rem -5px;
  font-size: 38px;
  @media (min-width: 350px) {
    font-size: 56px;
  }
  @media (min-width: 750px) {
    font-size: 70px;
  }
`;

export const BigLink = styled.p`
  font-size: 28px;
  font-weight: bold;
`

const resetToP = `
  color: ${props => props.color ? props.color : 'white'};
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.1px;
  line-height: 1.8;
`;

export const TextH1 = styled.h1`
  ${resetToP}
  font-weight: bold;
`;

export const TextH2 = styled.h2`
  ${resetToP}
`;

export const TextP = styled.p`
  ${resetToP}
`;

export const List = styled.ul`
  padding-left: 0;
`;

export const ListItem = styled.li`
  ${resetToP}
`;
