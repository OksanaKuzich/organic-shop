import {
  Price,
  PricePromo,
} from 'components/Home/Products/ProductListItem.styled';
import styled from 'styled-components';
import { device } from 'utiles/devices';

export const CartListStyle = styled.ul`
  margin-bottom: 46px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${device.tablet} {
  }

  @media ${device.desktop} {
  }
`;

export const CartItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  ${Price} {
    font-size: ${props => props.theme.fontSizes.fs24};
    margin-right: 20px;

    @media ${device.tablet} {
      font-size: ${props => props.theme.fontSizes.fs24};
    }

    @media ${device.desktop} {
      font-size: ${props => props.theme.fontSizes.fs24};
    }
  }

  ${PricePromo} {
    font-size: ${props => props.theme.fontSizes.fs25};

    @media ${device.tablet} {
      font-size: ${props => props.theme.fontSizes.fs32};
    }

    @media ${device.desktop} {
      font-size: ${props => props.theme.fontSizes.fs40};
    }
  }

  @media ${device.tablet} {
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  @media ${device.desktop} {
  }
`;

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media ${device.tablet} {
  }

  @media ${device.desktop} {
  }
`;

export const CartImage = styled.div`
  border-radius: 30px;
  overflow: hidden;
  margin-right: 42px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    width: 202px;
    height: 226px;
  }

  @media ${device.desktop} {
    width: 292px;
    height: 226px;
  }
`;

export const Image = styled.img`
  border-radius: 30px;
  height: 150px;
  overflow: hidden;
  object-fit: contain;
  margin: 0;

  @media ${device.tablet} {
    width: 252px;
    height: 226px;
  }

  @media ${device.desktop} {
    width: 292px;
    height: 226px;
  }
`;

export const CartProductTitle = styled.p`
  margin-right: 20px;
  font-weight: ${props => props.theme.fontWeights.fw600};
  font-size: ${props => props.theme.fontSizes.fs25};

  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.fs32};
  }

  @media ${device.desktop} {
    font-size: ${props => props.theme.fontSizes.fs40};
  }
`;

export const CartWrapperSumm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media ${device.tablet} {
  }

  @media ${device.desktop} {
  }
`;

export const Quantity = styled.p`
  margin-right: 22px;
  font-weight: ${props => props.theme.fontWeights.fw700};
  font-size: ${props => props.theme.fontSizes.fs25};

  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.fs30};
  }

  @media ${device.desktop} {
    font-size: ${props => props.theme.fontSizes.fs32};
  }
`;

export const QuantityInput = styled.input`
  margin-right: 10px;
  font-weight: ${props => props.theme.fontWeights.fw700};
  font-size: ${props => props.theme.fontSizes.fs20};
  width: 74px;
  height: 54px;
  text-align: center;
  background: #ffffff;
  border: 2px solid #274c5b;
  border-radius: 16px;

  @media ${device.tablet} {
    margin-right: 40px;
    width: 100px;
    height: 74px;
  }

  @media ${device.desktop} {
    margin-right: 97px;
    width: 134px;
    height: 74px;
  }
`;

export const BtnWrapper = styled.div`
  width: 44px;
  height: 36px;
  background: ${props => props.theme.colors.main};
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    width: 64px;
    height: 46px;
  }

  @media ${device.desktop} {
  }
`;
