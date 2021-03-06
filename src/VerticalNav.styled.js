import styled from 'styled-components';
import { L } from './Base.styled';

import { 
  mediaQuery,
} from './theme';

export const VertLink = styled.div`
  
  z-index: 2;
  font-size: 1.25rem;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  position: fixed;
  bottom: 0px;
  left: 50px;

  transition: all 250ms ease-out;

  ${mediaQuery.desktop_sm`
    display: none;
  `}

  &::after {
    content: "";
    width: 1px;
    height: 100px;
    margin: 0 auto;
    display: block;
    background-color: ${ ({ theme }) => theme.text_header_lg_sub};
  }

`;

export const VertL = styled(L)`
  color: ${ ({ theme }) => theme.text_header_lg_sub};
  padding-bottom: 25px;  
  transition: all 250ms ease-out;

  &:hover {
    transform: translateY(-10%);
  }
`;
