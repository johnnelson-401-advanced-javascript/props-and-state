import React from 'react';
import PropTypes from 'prop-types';

const RandomColor = (colors) => {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  window.setInterval(function() {
    RandomColor(colors);
  }, 2000);

  return (
    <div style={{
      randomColor,
      width: '100px',
      height: '100px'
    }}></div>
  );
};
RandomColor.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default RandomColor;
