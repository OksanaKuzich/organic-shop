import { Title } from 'components/Home/Hero/Hero.styled';
import styled from 'styled-components';
import { device } from 'utiles/devices';
import bgImage from '../../images/notFound-1.jpg';
import bgDerore from '../../images/notFound-2.png';

export const NotFoundSection = styled.section`
  margin-bottom: 130px;
  margin-left: auto;
  margin-right: auto;
`;

export const NotFoundInfo = styled.div`
  padding: 50px 150px;

  ${Title} {
    margin: 0;
  }

  @media ${device.tablet} {
    padding: 214px 260px 214px 727px;
  }

  @media ${device.desktop} {
    padding: 214px 260px 214px 1127px;
  }
`;

export const NotFoundSubtitle = styled.p`
  margin-bottom: 37px;
  font-family: ${props => props.theme.fonts.secondary};
  font-weight: ${props => props.theme.fontWeights.fw600};
  color: ${props => props.theme.colors.gray};

  @media ${device.tablet} {
  }

  @media ${device.desktop} {
  }
`;

export const ImageBg = styled.div`
  background: url(${bgDerore}), url(${bgImage});
  background-repeat: no-repeat;
  width: 768px;
  background-position: top right;
  margin-left: auto;
  margin-right: auto;

  @media ${device.tablet} {
    width: 1280px;
    height: 898px;
    background-position: -230px;
  }

  @media ${device.desktop} {
    width: 1920px;
    height: 898px;
    background-position: center;
  }
`;
