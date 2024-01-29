import styled from 'styled-components';
import { device } from '../../../utiles/devices';

export const NewsWrapper = styled.div`
  margin-bottom: 48px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const NewsTitles = styled.div`
  width: 702px;
`;

export const NewsList = styled.ul`
  display: flex;
  gap: 100px;
  flex-direction: column;
  align-items: center;

  @media ${device.desktop} {
    flex-direction: row;
    gap: 46px;
  }
`;

export const NewsItem = styled.li`
  position: relative;
  @media ${device.tablet} {
  }
`;

export const Image = styled.img`
  border-radius: 30px;
  width: 600px;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const NewsDate = styled.p`
  position: absolute;
  top: 43px;
  left: 32px;
  background: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fontWeights.fw800};
  font-size: ${props => props.theme.fontSizes.fs25};
  line-height: 1.15;
  width: 36px;
  padding: 16px 29px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const NewsCard = styled.div`
  position: absolute;
  bottom: -68px;
  left: 20px;
  padding: 20px 30px;
  width: 499px;
  background: ${props => props.theme.colors.white};
  box-shadow: 0px 20px 35px rgba(167, 167, 167, 0.25);
  border-radius: 31px 34px 30px 30px;

  @media ${device.tablet} {
    padding: 46px 57px 60px;
    bottom: -68px;
    left: 32px;
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 25px;
`;

export const CardTitle = styled.div`
  margin-bottom: 2px;
  font-weight: ${props => props.theme.fontWeights.fw800};
  font-size: ${props => props.theme.fontSizes.fs20};
`;

export const CardInfo = styled.div`
  margin-bottom: 15px;
  font-family: ${props => props.theme.fonts.secondary};
  line-height: 1.65;
  color: ${props => props.theme.colors.gray};
`;
