import { Title } from '../../components/Home/Hero/Hero.styled';
import styled from 'styled-components';
import { device } from '../../utiles/devices';
import CartDecoreBg from '../../images/cart-1.png';
import CartBg from '../../images/cart-2.jpg';

export const CartSection = styled.section`
  ${Title} {
    padding-top: 184px;
    padding-bottom: 184px;
    text-align: center;
    margin: 0 auto;
  }
`;

export const CartBgImage = styled.div`
  background: url(${CartDecoreBg}), url(${CartBg});
  background-repeat: no-repeat;
  background-position: top -40px right -340px;
  margin-left: auto;
  margin-right: auto;

  @media ${device.tablet} {
    background-position: top -40px right -340px;
    width: 1280px;
  }

  @media ${device.desktop} {
    background-position: top right;
    width: 1920px;
  }
`;

export const CartEmptyWrapper = styled.div`
  padding-top: 70px;
  padding-bottom: 100px;
  margin-left: auto;
  margin-right: auto;
  width: 400px;

  @media ${device.tablet} {
    width: 600px;
  }
`;

export const CartProducts = styled.div`
  margin-top: 140px;
  margin-bottom: 140px;
  padding: 50px 30px;
  background: rgba(253, 176, 45, 0.16);
  text-align: center;

  @media ${device.tablet} {
    padding: 50px;
  }

  @media ${device.desktop} {
    padding: 150px 102px 58px 245px;
  }
`;

export const TotalCart = styled.p`
  font-weight: ${props => props.theme.fontWeights.fw700};
  font-size: ${props => props.theme.fontSizes.fs25};
  text-align: right;
  padding-right: 0px;

  :nth-of-type(1) {
    margin-bottom: 32px;
  }

  :nth-of-type(2) {
    margin-bottom: 76px;
  }

  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.fs32};
    padding-right: 168px;
  }

  @media ${device.desktop} {
    font-size: ${props => props.theme.fontSizes.fs40};
  }
`;

export const TotalWrapper = styled.span`
  margin-left: 20px;
  @media ${device.tablet} {
  }
`;
