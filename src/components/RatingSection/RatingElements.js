import styled from 'styled-components';
import { colors, gradients, typography } from '../../styles/theme';

const Main = styled.main`
background: ${gradients.dark};
border-radius: 15px;
min-width: 250px;
max-width: 412px;
padding: 24px;
margin: 0 24px;
`;

const Image = styled.img`
height: 16px;
width: 16px;
`;

const Title = styled.h1`
${typography.heading}
`;

const Desc = styled.p`
${typography.text}
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
color: ${colors.white};
background: ${colors.orange};
padding: 15px 0;
border-radius: 22.5px;
margin-top: 24px;
transition: all 0.3s ease-in-out;

&:hover {
  background: ${colors.white};
  color: ${colors.orange};
}
`;

export { Main, Image, Title, Desc, RatingWrapper, Button };
