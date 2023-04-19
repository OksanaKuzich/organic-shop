import styled from 'styled-components';
import { device } from 'utiles/devices';
import imageBg from '../../../images/home-2.jpg';
import decoreImg from '../../../images/home-1.png';

export const HeroSection = styled.section`
  background-image: url(${decoreImg}), url(${imageBg});
  background-position: top 20% right 57%;
  background-repeat: no-repeat;
  margin-left: auto;
  margin-right: auto;
  padding-top: 150px;
  padding-bottom: 150px;
  max-width: 768px;

  @media ${device.tablet} {
    max-width: 1280px;
    background-position: top -40px right -340px;
  }

  @media ${device.desktop} {
    max-width: 1920px;
    padding-top: 247px;
    padding-bottom: 247px;
    background-position: top right;
  }
`;

export const Subtitle = styled.p`
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

export const Title = styled.p`
  font-size: ${props => props.theme.fontSizes.fs32};
  font-weight: ${props => props.theme.fontWeights.fw800};
  line-height: 1.17;
  margin-bottom: 23px;
  max-width: 330px;

  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.fs50};
    max-width: 530px;
  }

  @media ${device.desktop} {
    font-size: ${props => props.theme.fontSizes.fs70};
  }
`;
