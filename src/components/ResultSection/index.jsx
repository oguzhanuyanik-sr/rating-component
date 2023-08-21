import React from 'react';
import ThankYou from '../../assets/illustration-thank-you.svg';
import { Main, Image, Badge, Title, Desc } from './ResultElements';

const ResultSection = ({ selected }) => {
  return (
    <Main>
      <Image src={ThankYou} alt='Thank you' />
      <Badge>You selected {selected} out of 5</Badge>
      <Title>Thank you!</Title>
      <Desc>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </Desc>
    </Main>
  );
};

export default ResultSection;
