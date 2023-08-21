import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.div`
background: ${(props) => (props.$isActive ? '#7C8798' : '#262E38')};
width: 14%;
height: 0;
padding: 7% 0;
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
color: ${(props) => (props.$isActive ? '#FFFFFF' : '#7C8798')};
cursor: ${(props) => props.$cursor || 'auto'};
transition: all .3s ease-in-out;

&:hover {
  background: ${(props) => props.$bgHover || '#262E38'};
  color: ${(props) => props.$colorHover || '#7C8798'}
}
`;

const Circle = ({
  children,
  handleClick,
  $isActive,
  $cursor,
  $bgHover,
  $colorHover,
}) => {
  return (
    <Wrapper
      onClick={handleClick}
      $cursor={$cursor}
      $bgHover={$bgHover}
      $colorHover={$colorHover}
      $isActive={$isActive}
    >
      {children}
    </Wrapper>
  );
};

export default Circle;
