import React from 'react';
import Circle from '../common/Circle';
import Star from '../../assets/icon-star.svg';
import {
  Main,
  Image,
  Title,
  Desc,
  RatingWrapper,
  Button,
} from './RatingElements';

const RatingSection = ({ handleSubmit, selected, setSelected }) => {
  return (
    <Main>
      <Circle>
        <Image src={Star} alt='Rating' />
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
