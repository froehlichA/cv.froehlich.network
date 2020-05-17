import React from "react";
import styled from "styled-components";
const Icon = require("../assets/triangle.svg");

const TriangleIcon = styled(Icon)`
  height: 40px;
  width: 40px;
`;

const LogoContainer = styled.div`
height: 40px;
width: 40px;
&:hover {
  background-color: #222222;
}
margin-bottom: 60px;
@media only screen and (min-width: 768px) {
  margin-bottom: 100px;
}
`;

export default () => {
  return (
    <LogoContainer>
      <TriangleIcon />
    </LogoContainer>
  );
};
