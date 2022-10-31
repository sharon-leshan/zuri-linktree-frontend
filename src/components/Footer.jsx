import React from 'react';
import { zuri, logo } from '../assets';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <img src={zuri} alt="logo" />
      <p>HNG Internship 9 Frontend Task</p>
      <img src={logo} alt="IaG-logo" />
    </footer>
  );
};

export default Footer;
