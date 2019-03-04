import styled from 'styled-components';

export default styled.button`
  color: white;
  background-color: black;
  padding: 8px 5px 2px 5px;
  font-size: 25px;
  width: 50px;
  height: 50px;
  text-align: center;
  border: 0;
  cursor: pointer;
  outline: none;
  &:active {
    margin-top: 3px;
    margin-bottom: -3px;
  }
  @media (min-width: 768px) {
    margin-right: 20px;
    padding: 10px;
    font-size: 30px;
    width: 60px;
    height: 60px;
  }
`;