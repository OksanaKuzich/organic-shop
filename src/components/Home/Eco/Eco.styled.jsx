import { Container } from '../../../components/Container/Container.styled';
import styled from 'styled-components';
import { device } from '../../../utiles/devices';
import imageBg from '../../../images/eco.jpg';
import { SubtitleStyle } from '../Subtitle/Subtitle.styled';
import { TitleStyle } from '../Title/Title.styled';

export const EcoSection = styled.section`
  ${Container} {
    display: flex;
    padding: 0;
  }
`;

export const Image = styled.div`
  background-image: url(${imageBg});
  background-repeat: no-repeat;
  width: 952px;
  height: 931px;
`;

export const EcoInfo = styled.div`
  position: relative;
  left: -89px;
  padding: 30px;
  margin-top: auto;
  margin-bottom: auto;
  max-width: 600px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 30px;

  ${SubtitleStyle} {
    margin-bottom: 8px;
  }
  ${TitleStyle} {
    margin-bottom: 35px;
  }
  @media ${device.tablet} {
    padding: 78px 89px;
  }
`;

export const EcoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const EcoItemTitle = styled.p`
  margin-bottom: 7px;
  font-weight: ${props => props.theme.fontWeights.fw500};
  font-size: ${props => props.theme.fontSizes.fs25};
`;

export const EcoItemSubtitle = styled.p`
  font-family: ${props => props.theme.fonts.secondary};
  font-size: ${props => props.theme.fontSizes.fs18};
  line-height: 1.65;
  color: ${props => props.theme.colors.gray};
`;
