import styled from "styled-components";

export default styled.div<{ size: number }>`
  @media only screen and (min-width: 768px) {
    margin-left: 30px;
  }
  & {
    @media only screen and (min-width: 768px) {
      margin-top: calc(50vh - 80px - ${props => props.size / 2}px);
    }
  }
`;
