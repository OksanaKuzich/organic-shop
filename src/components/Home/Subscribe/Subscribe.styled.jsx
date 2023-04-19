import styled from 'styled-components';
import { device } from 'utiles/devices';
import formBg from '../../../images/subscribe.jpg';

export const SubscribeSection = styled.section`
  padding-top: 253px;
  padding-bottom: 117px;

  @media ${device.tablet} {
  }
`;

export const SubscribeForm = styled.div`
  background: url(${formBg});
  background-repeat: no-repeat;
  padding: 30px;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 30px;
  justify-content: center;

  @media ${device.tablet} {
    padding: 50px 71px;
  }

  @media ${device.desktop} {
    padding: 105px 71px;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
`;

export const SubscribeTitle = styled.div`
  font-weight: ${props => props.theme.fontWeights.fw800};
  font-size: ${props => props.theme.fontSizes.fs27};
  line-height: 1.18;
  color: ${props => props.theme.colors.white};

  @media ${device.tablet} {
  }

  @media ${device.desktop} {
    width: 357px;
    font-size: ${props => props.theme.fontSizes.fs50};
  }
`;

export const SubscribeInput = styled.input`
  padding-left: 23px;
  margin-right: 6px;
  width: 249px;
  height: 50px;
  background: ${props => props.theme.colors.white};
  border: none;
  border-radius: 16px;
  font-size: ${props => props.theme.fontSizes.fs18};

  @media ${device.tablet} {
    width: 349px;
    height: 78px;
    font-size: ${props => props.theme.fontSizes.fs20};
  }
`;
