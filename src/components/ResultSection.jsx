import React from 'react';
import styled from 'styled-components';
import ThankYou from '../assets/illustration-thank-you.svg';

const Main = styled.main`
background: radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);
border-radius: 15px;
min-width: 250px;
max-width: 412px;
padding: 24px;
margin: 0 24px;
display: flex;
flex-direction: column;
align-items: center;
`;

const Image = styled.img`
height: 108px;
width: 162px;
margin: 8px 0 24px 0;
`;

const Badge = styled.p`
color: #FC7614;
background: #262E38;
border-radius: 22.5px;
padding: 12px 14px;
font-size: 14px;
`;

const Title = styled.h1`
color: #FFFFFF;
font-size: 24px;
font-weight: bold;
`;

const Desc = styled.p`
color: #969FAD;
text-align: center;
font-size: 14px;
line-height: 22px;
margin: 0 0 16px 0;
`;

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
