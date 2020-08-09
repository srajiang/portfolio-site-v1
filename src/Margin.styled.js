import styled, { css, keyframes } from 'styled-components';

import { font, mediaQuery } from "./theme";

/* kf animations for navbar scroll */

const activate = keyframes`
  0% {
      top: 0px;
  }
  
  100% {
    top: -10px;
  }
`;

const slideUp = keyframes`
  from {
    top: 0;
  }
  to {
    top: -100px;
  }
`;

const slideDown = keyframes`
  from { 
    top: -100px;
  }
  to {
    top: -10px;
  }
`;

/* navbar constants */

const MIN = 0;
const MAX = 90;

const Bar = styled.div`
  z-index: 1;

  width: 100vw;
  height: 70px;
  padding-top: 10px;
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background_primary};
  font-family: ${font.family.accent};
  font-size: ${font.size.accent};
  transition: all 0.2s ease-in;

  ${({ scrollDir, YOffset, theme }) => {
    if (YOffset <= MIN) return;
    if (scrollDir === "down") {
      return css`
        box-shadow: ${theme.box_shadow} 0px 10px 30px -10px;
        position: -webkit-sticky;
        position: sticky;
        animation: ${() => {
            return YOffset > MIN && YOffset < MAX ? activate : slideUp;
          }}
          0.1s ease-in 1;
        animation-fill-mode: forwards;
      `;
    } else if (scrollDir === "up") {
      return css`
        box-shadow: ${theme.box_shadow} 0px 10px 30px -10px;
        position: -webkit-sticky;
        position: sticky;
        animation: ${() => {
            return YOffset > MIN ? slideDown : "";
          }}
          0.1s ease-in 1;
        animation-fill-mode: forwards;
      `;
    }
  }};
`;

export const FooterBar = styled(Bar)`
  flex-direction: column;
  justify-content: center;

  & p {
    padding-bottom: 5px;
  }
`;

export const NavBar = styled(Bar)`
  justify-content: flex-end;

  ${mediaQuery.desktop_sm`
    display: none;
  `} 

`;

export const NavHamburgerMenu = styled(Bar)`
  cursor: pointer;
  display: none; 

  ${mediaQuery.desktop_sm`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  `} 

  .hamburger-box {
    position: relative;
    margin-right: 35px;
    height: 8px;
    width: 24px;
  }

`;

export const Menu = styled.div`
    border-radius: 2px;
    height: 1.5px;
    width: 35px;
    top: 50%;
    background-color: ${({theme}) => theme.text_accent};

    position: absolute;

`;

export const NavLink = styled.div`

  padding-right: 25px;
  text-align: right;
  font-size: ${font.size.accent};

  & .anchor{
    padding-right: 1.5rem;
  }

  .anchor > span {
    color: ${({theme}) => theme.text_accent};
  }
`;

