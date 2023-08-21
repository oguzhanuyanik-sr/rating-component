import styled from 'styled-components';
import { colors, gradients, layout, typography } from '../../styles/theme';

const Main = styled.main`
background: ${gradients.dark};
border-radius: 15px;
min-width: 250px;
max-width: 412px;
padding: 24px;
margin: 0 24px;
${layout.center}
flex-direction: column;
`;

const Image = styled.img`
height: 108px;
width: 162px;
margin: 8px 0 24px 0;
`;

const Badge = styled.p`
color: ${colors.orange};
background: ${colors.softBlue};
border-radius: 22.5px;
padding: 12px 14px;
font-size: 14px;
`;

const Title = styled.h1`
${typography.heading}
`;

const Desc = styled.p`
${typography.text}
text-align: center;
margin: 0 0 16px 0;
`;

export { Main, Image, Badge, Title, Desc };
