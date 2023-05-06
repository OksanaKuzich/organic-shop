import styled from 'styled-components';
import { device } from '../../../utiles/devices';
import FruitImage from '../../../images/about.png';
import { SubtitleStyle } from '../Subtitle/Subtitle.styled';

export const AboutSection = styled.section`
  position: relative;
  background-color: ${props => props.theme.colors.backgroundLigth};

  ${SubtitleStyle} {
    margin-bottom: 8px;
  }
`;

export const ImageWrapper = styled.section`
  background-image: url(${FruitImage});
  width: 911px;
  height: 867px;
  position: absolute;
  top: 30px;
  left: -550px;
  z-index: 0;

  @media ${device.tablet} {
    top: 87px;
    left: -200px;
    width: 911px;
    height: 867px;
  }

  @media ${device.desktop} {
    top: 87px;
    left: 100px;
    width: 911px;
    height: 867px;
  }
`;

export const ContentWrapper = styled.div`
  padding: 100px 0 100px 200px;
  position: relative;
  z-index: 2;

  @media ${device.tablet} {
    padding: 186px 0 199px 450px;
  }

  @media ${device.desktop} {
    padding: 186px 0 199px 698px;
  }
`;

export const Content = styled.p`
  margin-top: 14px;
  font-family: ${props => props.theme.fonts.secondary};
  font-size: ${props => props.theme.fontSizes.fs18};
  color: ${props => props.theme.colors.gray};
`;

export const AdvantagesList = styled.ul`
  margin-top: 46px;
  margin-bottom: 46px;
  max-width: 564px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const AdvantagesItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: 19px;
`;

export const Image = styled.img`
  display: flex;
  flex-direction: row;
  gap: 19px;

  :nth-of-type(1) {
    width: 53px;
    height: 46px;
  }

  :nth-of-type(2) {
    width: 56px;
    height: 52px;
  }
`;

export const AdvantagesWrapper = styled.div`
  width: 101px;
  height: 101px;
  background: ${props => props.theme.colors.white};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AdvantagesTitle = styled.p`
  margin-bottom: 7px;
  font-weight: ${props => props.theme.fontWeights.fw800};
  font-size: ${props => props.theme.fontSizes.fs25};
  line-height: 1.16;
`;

export const AdvantagesSubtitle = styled.p`
  font-family: ${props => props.theme.fonts.secondary};
  font-size: ${props => props.theme.fontSizes.fs18};
  color: ${props => props.theme.colors.gray};
  line-height: 1.66;
`;
