import React from 'react';
import { Wrapper } from './CircleElements';

const Circle = ({ children, handleClick, ...styledProps }) => {
  return (
    <Wrapper onClick={handleClick} {...styledProps}>
      {children}
    </Wrapper>
  );
};

export default Circle;
