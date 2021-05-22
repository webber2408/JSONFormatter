import React from 'react';

const PrimitiveType = ({ label, data }) => {
  return (
    <li>
      <span className='pinkText'>"{label}"</span> : "{data}"
    </li>
  );
};

export default PrimitiveType;
