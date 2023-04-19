import styled from 'styled-components';
import { device } from 'utiles/devices';
import { Field } from 'formik';
import { ButtomComp } from 'components/Button/Button.styled';

export const FormStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 45px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: row;
    width: 1184px;
  }

  @media ${device.desktop} {
  }

  & ~ ${ButtomComp} {
    margin-top: 114px;

    :hover,
    :focus {
      background-color: ${props => props.theme.colors.btn};
    }
  }
`;

export const InputStyle = styled(Field)`
  margin-top: 25px;
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.accent};
  border-radius: 16px;
  width: 544px;
  height: 80px;
  padding-left: 23px;
  font-style: italic;
  color: ${props => props.theme.colors.placeholder};

  @media ${device.tablet} {
    width: 544px;
  }

  @media ${device.desktop} {
  }
`;

export const LabelStyle = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  font-weight: ${props => props.theme.fontWeights.fw600};

  @media ${device.tablet} {
    width: 569px;
  }

  @media ${device.desktop} {
  }
`;

export const TextareaStyle = styled.textarea`
  margin-top: 25px;
  padding: 28px 23px;
  width: 500px;
  height: 247px;
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.accent};
  border-radius: 16px;
  resize: none;

  @media ${device.tablet} {
    width: 1136px;
    height: 247px;
  }

  @media ${device.desktop} {
  }
`;

export const ValidationMessage = styled.div`
  font-size: ${props => props.theme.fontSizes.fs12};
  position: absolute;
  z-index: 10;
  bottom: -30px;
  left: 0;
  color: rgba(255, 0, 0);

  @media ${device.tablet} {
    bottom: -20px;
    left: 0;
    font-size: ${props => props.theme.fontSizes.fs14};
  }
`;
