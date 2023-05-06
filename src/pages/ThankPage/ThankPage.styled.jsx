import { Title } from '../../components/Home/Hero/Hero.styled';
import styled from 'styled-components';
import { device } from '../../utiles/devices';

export const ThankPageSection = styled.section`
  padding-top: 94px;
  padding-bottom: 269px;
  text-align: center;

  ${Title} {
    max-width: 1000px;
    margin: 0 auto 44px;
  }
  @media ${device.tablet} {
  }

  @media ${device.desktop} {
  }
`;

export const Image = styled.img`
  margin-left: auto;
  margin-right: auto;

  @media ${device.tablet} {
  }

  @media ${device.desktop} {
  }
`;
