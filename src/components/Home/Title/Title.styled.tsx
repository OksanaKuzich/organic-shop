import styled from 'styled-components';
import { device } from '../../../utiles/devices';

export const TitleStyle = styled.h2`
  font-weight: ${props => props.theme.fontWeights.fw800};
  font-size: ${props => props.theme.fontSizes.fs38};
  line-height: 1.18;

  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.fs40};
  }

  @media ${device.desktop} {
    font-size: ${props => props.theme.fontSizes.fs50};
  }
`;
