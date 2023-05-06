import { SubtitleStyle } from '../../../components/Home/Subtitle/Subtitle.styled';
import styled from 'styled-components';
import { device } from '../../../utiles/devices';
import testimonialBg from '../../../images/testimonial.jpg';

export const TestimonialSection = styled.section`
  text-align: center;
  padding-top: 164px;
  padding-bottom: 164px;
  max-width: 1920px;
  background-repeat: no-repeat;
  margin-left: auto;
  margin-right: auto;
  ${SubtitleStyle} {
    margin-bottom: 8px;
  }

  @media ${device.mobile} {
    background-color: ${props => props.theme.colors.backgroundLigth};
  }

  @media ${device.tablet} {
    background-image: url(${testimonialBg});
    background-position: center;
  }
`;

export const Reviews = styled.div`
  margin: 60px auto 102px;
  width: 400px;

  @media ${device.tablet} {
    width: 500px;
  }

  @media ${device.desktop} {
    width: 780px;
  }
`;

export const ReviewsImages = styled.img`
  width: 115px;
  height: 115px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

export const ReviewsContent = styled.p`
  margin-top: 25px;
  font-family: ${props => props.theme.fonts.secondary};
  font-size: ${props => props.theme.fontSizes.fs18};
  line-height: 1.65;
  color: ${props => props.theme.colors.gray};
`;

export const ReviewsName = styled.p`
  margin-top: 20px;
  font-size: ${props => props.theme.fontSizes.fs25};
  font-weight: ${props => props.theme.fontWeights.fw600};
`;

export const ReviewsNamePosition = styled.p`
  margin-bottom: 102px;
  font-family: ${props => props.theme.fonts.secondary};
  font-size: ${props => props.theme.fontSizes.fs15};
  line-height: 1.65;
  color: ${props => props.theme.colors.gray};
`;

export const InfoWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;

  @media ${device.tablet} {
    width: 1108px;
  }
`;
