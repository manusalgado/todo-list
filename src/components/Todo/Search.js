import styled from 'styled-components';

export default styled.input`
  padding-left: 15px;
  height: 35px;
  width: 75%;
  border: none;
  transition: 300ms;
  box-shadow: 0px 2px 0px 0px gray;
  outline: none;
  font-size:1rem;
  &:focus{
    box-shadow: 0px 2px 0px 0px #001f3f;
  }
`;
