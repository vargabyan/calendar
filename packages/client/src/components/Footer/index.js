import React from 'react';
import FooterStyles from './StyledComponents';

const Footer = ({ handleButtonDelete }) => (
  <FooterStyles>
    <p>Today</p>
    {handleButtonDelete ? <button>Delete</button> : undefined}
  </FooterStyles>
);

export default Footer;
