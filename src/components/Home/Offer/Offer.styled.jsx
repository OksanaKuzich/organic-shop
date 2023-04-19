import styled from 'styled-components';
import { device } from 'utiles/devices';
import { SubtitleStyle } from '../Subtitle/Subtitle.styled';
import { TitleStyle } from '../Title/Title.styled';

export const OfferSection = styled.section`
  padding-top: 200px;
  padding-bottom: 200px;
  background-color: ${props => props.theme.colors.main};
  ${SubtitleStyle} {
    margin-bottom: 8px;
  }
  ${TitleStyle} {
    margin-bottom: 50px;
    color: ${props => props.theme.colors.white};
  }

  @media ${device.tablet} {
  }
`;

export const RandomList = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;

  @media ${device.desktop} {
    justify-content: flex-start;
    flex-wrap: nowrap;
  }
`;
