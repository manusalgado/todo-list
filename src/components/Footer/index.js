import React from 'react';
import coffee from './../../assets/coffee.png';
import love from './../../assets/love.png';

//style
import MainFooter from './MainFooter';

const Footer = () => (
  <MainFooter>
    <small>Hecho con <img src={coffee}/> y <img src={love}/> por <strong>Manuel Salgado</strong>.</small>
  </MainFooter>
  );
export default Footer;