import styled from 'styled-components';

export default styled.ul`
  list-style: none;
  padding: 0;
  margin: 35px auto 0 auto;
  li {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.5);
    height: 30px;
    border-radius: 5px;
    text-align: left;
    padding: 10px;
    margin: 15px;
    background-color:#001f3f;
    transition: 300ms;
    &:hover {
      background-color: rgba(255, 0, 0, 0.7);
    }
    button {
      width: 100%;
      height: 100%;
      position: relative;
      bottom: 60%;
      opacity: 0;
      padding-top:15px;
      &:hover {
        opacity:1;
        background-color: transparent;
        border:none;
        color: #fff;
        font-size:1rem;
        text-align:right;
        cursor: pointer;
      }
    }
  }
`;