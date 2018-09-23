import styled from 'styled-components';

export default styled.div`
  max-width: 25%;
  text-align: center;
  margin: 50px auto;
  @media (max-width: 414px) {
    max-width: 90%;
    }
  form {
    display:grid;
    input {
      font-size: 1rem;
      height: 35px;
      margin: 15px 0;
      border: none;
      box-shadow: 0px 2px 0px 0px gray;
      &:focus {
        box-shadow: 0px 2px 0px 0px #001f3f;
      }
    }
    button {
      margin: 15px 0;
      height: 35px;
      border-radius: 3px;
      border: none;
      cursor: pointer;
      background-color: #001f3f;
      text-transform: uppercase;
      font-weight: bold;
      color: #fff;
      -webkit-transition: 300ms;
      transition: 300ms;
      &:hover {
        background-color:#4e6e8f;
      }
    }
  }
`;