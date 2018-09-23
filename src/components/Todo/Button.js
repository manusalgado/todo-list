import styled from 'styled-components';

export default styled.button`
  height: 35px;
  width: 18%;
  border-radius: 3px;
  border: none;
  margin: 0 10px;
  cursor: pointer;
  background-color: #001f3f;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  transition: 300ms;
  &:hover {
    background-color:#4e6e8f;
  }
  @media (max-width: 414px) {
    width: 80%;
    margin-top: 15px;
    }
`;