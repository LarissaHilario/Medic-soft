import React from 'react';
import './LoaderComponent.scss';

const LoaderComponent = () => {
  return (
    <div className='container'>
      <div className="spinner">
      <svg className="imagenn" width="16px" height="12px">
        <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6 "></polyline>
        <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
      </svg>
    </div>
    </div>
    
  );
};

export default LoaderComponent;
