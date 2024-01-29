import { ButtomComp } from '../../../Button/Button.styled';
import styled from 'styled-components';
import { device } from '../../../../utiles/devices';
import { Price, PricePromo, ProductCategory } from '../ProductListItem.styled';

export const Wrapper = styled.div`
  position: fixed;
  background: rgba(244, 244, 244, 0.82);
  z-index: 1000;
  overflow-y: scroll;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const Modal = styled.div`
  margin-top: 200px;

  position: absolute;
  padding: 50px 30px;
  top: 50%;
  left: 50%;
  width: 680px;
  transform: translate(-50%, -50%);
  background: ${props => props.theme.colors.modal};
  border-radius: 30px;

  @media ${device.tablet} {
    margin-top: 100px;
    width: 1160px;
    padding: 60px;
  }

  @media ${device.desktop} {
    margin-top: 100px;
    width: 1450px;
  }
`;

export const ImageSt = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  margin-left: auto;
  margin-right: auto;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 391px;
  background: ${props => props.theme.colors.backgroundLigth};
  border-radius: 30px;
  overflow: hidden;

  @media ${device.tablet} {
    width: 591px;
    height: 563px;
  }

  ${ProductCategory} {
    position: absolute;
    top: 38px;
    left: 35px;
  }
`;

export const ModalInfo = styled.div`
  display: flex;
  margin-bottom: 90px;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    gap: 88px;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 50px;
  right: 50px;
  width: 64px;
  height: 46px;
  background: ${props => props.theme.colors.main};
  border-radius: 16px;
  border: none;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background: ${props => props.theme.colors.accent};
  }
`;

export const ModalDetalis = styled.div`
  padding-top: 50px;
  max-width: 658px;

  @media ${device.tablet} {
    padding-top: 106px;
  }
`;

export const ModalTitle = styled.h2`
  font-weight: ${props => props.theme.fontWeights.fw600};
  font-size: ${props => props.theme.fontSizes.fs40};
  margin-bottom: 9px;
`;

export const ModalPriceWrapper = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 9px;
  margin-bottom: 27px;
  align-items: center;

  ${Price} {
    font-size: ${props => props.theme.fontSizes.fs20};
  }
  ${PricePromo} {
    font-size: ${props => props.theme.fontSizes.fs25};
  }
`;

export const ModalShortDescr = styled.div`
  margin-bottom: 35px;
  font-family: ${props => props.theme.fonts.secondary};
  font-weight: ${props => props.theme.fontWeights.fw400};
  font-size: ${props => props.theme.fontSizes.fs18};
  line-height: 1.65;
  color: ${props => props.theme.colors.gray};
`;

export const ModalLabel = styled.label`
  font-weight: ${props => props.theme.fontWeights.fw700};
  font-size: ${props => props.theme.fontSizes.fs20};
  margin-right: 20px;

  & ~ ${ButtomComp} {
    :hover {
      background-color: ${props => props.theme.colors.btn};
    }
  }
`;

export const ModalInput = styled.input`
  margin-left: 22px;
  width: 134px;
  height: 78px;
  background: ${props => props.theme.colors.white};
  outline: 2px solid ${props => props.theme.colors.main};
  border-radius: 16px;
  border: none;
  text-align: center;
  font-weight: ${props => props.theme.fontWeights.fw700};
  font-size: ${props => props.theme.fontSizes.fs20};
  line-height: 1.15;
  color: ${props => props.theme.colors.main};
`;

export const MoreInfo = styled.div`
  margin-left: auto;
  margin-right: auto;

  @media ${device.tablet} {
    width: 1137px;
    text-align: center;
  }
`;

export const DescriptionInfo = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.fs18};
  line-height: 1.65;
  color: ${props => props.theme.colors.gray};
`;

export const ButtonDescrInfo = styled.button`
  font-family: ${props => props.theme.fonts.secondary};
  font-weight: ${props => props.theme.fontWeights.fw700};
  font-size: ${props => props.theme.fontSizes.fs18};
  border-radius: 16px;
  margin-bottom: 27px;
  width: 263px;
  height: 80px;
  border: none;
  cursor: pointer;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

  :nth-child(1) {
    margin-right: 20px;
  }

  :hover,
  :focus {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.main};
  }

  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.fs25};
    width: 363px;
    height: 80px;
  }
`;
