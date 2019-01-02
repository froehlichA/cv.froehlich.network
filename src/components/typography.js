import styled from 'styled-components';

export const Hero = styled.h1`
  color: ${props => props.color || props.theme.fg};
  font-weight: bold;
  ${props =>
    props.inverted &&
    `
    -webkit-text-fill-color: ${props.theme.bg};
    -webkit-text-stroke: 2px ${props.theme.fg};
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
  color: ${props => props.color || props.theme.fg};
  font-size: 28px;
  font-weight: bold;
`;

const resetToP = `
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.1px;
  line-height: 1.8;
`;

export const TextH1 = styled.h1`
  color: ${props => props.color || props.theme.fg};
  ${resetToP}
  font-weight: bold;
`;

export const TextH2 = styled.h2`
  color: ${props => props.color || props.theme.fg};
  ${resetToP}
`;

export const TextP = styled.p`
  color: ${props => props.inverted ? props.theme.bg : props.theme.fg};
  ${resetToP}
`;

export const List = styled.ul`
  padding-left: 0;
`;

export const ListItem = styled.li`
  color: ${props => props.color || props.theme.fg};
  ${resetToP}
`;

export const Small = styled.small`
  color: ${props => props.color || props.theme.fg};
`;
