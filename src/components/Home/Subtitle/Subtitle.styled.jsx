import styled from 'styled-components';
import { device } from 'utiles/devices';

export const SubtitleStyle = styled.p`
  font-family: ${props => props.theme.fonts.accent};
  font-size: ${props => props.theme.fontSizes.fs18};
  color: ${props => props.theme.colors.subtitle};
  line-height: 1.36;

  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.fs24};
  }

  @media ${device.desktop} {
    font-size: ${props => props.theme.fontSizes.fs36};
  }
`;
