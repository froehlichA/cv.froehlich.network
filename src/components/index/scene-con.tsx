import styled from "styled-components";

export default styled.div`
  width: 300px;
  height: 300px;
  margin: auto;
  @media only screen and (min-width: 768px) {
    margin-top: calc(50vh - 80px - 150px);
  }
`;
