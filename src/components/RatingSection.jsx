import React from 'react';
import styled from 'styled-components';
import Circle from './common/Circle';
import Star from '../assets/icon-star.svg';

const Main = styled.main`
background: radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);
border-radius: 15px;
min-width: 250px;
max-width: 412px;
padding: 24px;
margin: 0 24px;
`;

const Image = styled.img`
height: 13px;
width: 13px;
`;

const Title = styled.h1`
font-weight: bold;
font-size: 24px;
color: #FFFFFF;
`;

const Desc = styled.p`
line-height: 22px;
font-size: 14px;
color: #969FAD;
margin: 10px 0 24px 0;
`;

const RatingWrapper = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`;

const Button = styled.button`
text-transform: uppercase;
font-weight: bold;
font-size: 15px;
letter-spacing: 2px;
border: none;
cursor: pointer;
width: 100%;
hegiht: 100%;
color: #FFFFFF;
background: #FC7614;
padding: 15px 0;
border-radius: 22.5px;
margin-top: 24px;
transition: all 0.3s ease-in-out;

&:hover {
  background: #FFFFFF;
  color: #FC7614;
}
`;

const RatingSection = ({ handleSubmit, selected, setSelected }) => {
  return (
    <Main>
      <Circle>
        <Image src={Star} alt='Raiting' />
      </Circle>
      <Title>How did we do?</Title>
      <Desc>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Desc>
      <RatingWrapper>
        {[1, 2, 3, 4, 5].map((number, i) => (
          <Circle
            $cursor='pointer'
            $bgHover='#FC7614'
            $colorHover='#FFFFFF'
            $isActive={selected === number}
            key={i}
            handleClick={() => setSelected(number)}
          >
            {number}
          </Circle>
        ))}
      </RatingWrapper>
      <Button onClick={handleSubmit}>Submit</Button>
    </Main>
  );
};

export default RatingSection;
