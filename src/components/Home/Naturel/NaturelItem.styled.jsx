import styled from 'styled-components';
import { device } from 'utiles/devices';
import imageBgFirst from '../../../images/natural-1.jpg';
import imageBgSecont from '../../../images/natural-2.jpg';

export const CardWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media ${device.tablet} {
    flex-wrap: nowrap;
  }

  @media ${device.desktop} {
    gap: 36px;
  }
`;

export const ContentWrapper = styled.div`
  padding: 109px 10px 110px 55px;
  width: 260px;
`;

export const CardSubtitle = styled.p`
  font-family: ${props => props.theme.fonts.accent};
  font-size: ${props => props.theme.fontSizes.fs18};
  line-height: 1.36;

  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.fs36};
  }
`;

export const CardTitle = styled.h2`
  font-weight: ${props => props.theme.fontWeights.fw800};
  font-size: ${props => props.theme.fontSizes.fs28};
  line-height: 1.17;

  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.fs40};
  }
`;

export const CardItem = styled.li`
  width: 582px;
  border-radius: 30px;

  :nth-of-type(1) {
    background-image: url(${imageBgFirst});
    color: ${props => props.theme.colors.white};
  }

  :nth-of-type(2) {
    background-image: url(${imageBgSecont});
    ${CardSubtitle} {
      color: ${props => props.theme.colors.accent};
    }
  }

  @media ${device.tablet} {
    width: 582px;
    height: 367px;
  }

  @media ${device.desktop} {
    width: 682px;
    height: 367px;
  } ;
`;
