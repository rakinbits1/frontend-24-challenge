
import styled from 'styled-components';

import {allColors} from '../constants/color';

export const ContentMobile = styled.div`
  flex-grow: 1;
  max-width: 100%;
`;



export const NavMobile = styled.div`
  font-size: 14px;
  display: flex;
  flex: 50%;
  justify-content: center;
  align-items: center;
  background: #fff;
  margin-bottom: 8px;
`;


export const TabMobile = styled.button`
  width: 100%;
  position: relative;
  display: inline-flex;
  align-items: center;
  margin:8px 0px;
  justify-content: center;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: Helvetica Neue, sans-serif;
  font-weight: 700;
  font-size: 14px;
  outline: none;
  padding: 0;
  color: ${({active}) => (active ? allColors.blackDark : `${allColors.blackLight}`)};
  transition: color 0.3s;

  &:hover {
    color: #000;

    &:before {
      height: 2px;
    }
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    
    left: 0;
    width: 100%;
    height: ${({active}) => (active ? '2px' : `1px ${  allColors.blackLight}`)};
    background: currentColor;
    transition: height 0.3s;
    border-radius: 2px;
  }
`;



