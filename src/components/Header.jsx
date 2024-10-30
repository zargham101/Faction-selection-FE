import React from 'react';
import HeaderText from './HeaderText';
import HeaderImage from './HeaderImage';

const Header = ({ coverImage }) => (
  <div className="header-container">
    <HeaderImage coverImage={coverImage} />
    <HeaderText />
  </div>
);

export default Header;
