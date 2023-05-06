import styled from 'styled-components';
import { device } from '../../utiles/devices';

export const ButtomComp = styled.button`
  width: 220px;
  height: 79px;
  color: ${props => {
    if (props.stl === 'blue') {
      return props.theme.colors.white;
    }
    return props.theme.colors.main;
  }};
  background-color: ${props => {
    if (props.stl === 'blue') {
      return props.theme.colors.main;
    } else if (props.stl === 'yellow') {
      return props.theme.colors.btn;
    }
    return props.theme.colors.white;
  }};
  border: ${props => {
    if (props.stl === 'blue' || props.stl === 'yellow') {
      return 'none';
    }
    return '2px solid #274C5B';
  }};
  border-radius: 16px;
  font-weight: ${props => props.theme.fontWeights.fw700};
  font-size: ${props => props.theme.fontSizes.fs18};
  line-height: 1.15;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  font-family: ${props => props.theme.fonts.secondary};

  :hover,
  :focus {
    background-color: ${props => props.theme.colors.accent};
  }

  @media ${device.tablet} {
    width: 220px;
    height: 79px;
    font-size: ${props => props.theme.fontSizes.fs20};
  }

  @media ${device.desktop} {
    width: 220px;
    height: 79px;
    font-size: ${props => props.theme.fontSizes.fs20};
  }
`;

export const IconArrowWrapper = styled.div`
  margin-left: 10px;
  width: 19px;
  height: 19px;
  background: #335b6b;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
  }

  @media ${device.desktop} {
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
  }

  @media ${device.desktop} {
  }
`;
