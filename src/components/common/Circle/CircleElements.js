import styled from 'styled-components';
import { colors, layout } from '../../../styles/theme';

const Wrapper = styled.div`
background: ${({ $isActive }) => ($isActive ? colors.gray : colors.darkGray)};
width: 14%;
height: 0;
padding: 7% 0;
border-radius: 100%;
color: ${({ $isActive }) => ($isActive ? colors.white : colors.gray)};
cursor: ${({ $cursor }) => $cursor || 'auto'};
transition: all .3s ease-in-out;
${layout.center}

&:hover {
  background: ${({ $bgHover }) => $bgHover || colors.darkGray};
  color: ${({ $colorHover }) => $colorHover || colors.gray}
}
`;

export { Wrapper };
