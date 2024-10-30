import React from 'react';

const HeaderImage = ({ coverImage }) => {
  return (
    <div
      className="header-image"
      style={{ backgroundImage: `url(${coverImage})` }}
    />
  );
};

export default HeaderImage;
