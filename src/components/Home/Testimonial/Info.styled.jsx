import styled from 'styled-components';
import { device } from 'utiles/devices';

export const InfoList = styled.ul`
  margin-top: 102px;
  padding-left: 39px;
  padding-right: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;

  @media ${device.tablet} {
    padding-left: 39px;
    padding-right: 39px;
    gap: 62px;
    flex-direction: row;
  }
`;

export const InfoItem = styled.li`
  width: 211px;
  height: 211px;
  border: 4px solid ${props => props.theme.colors.accent};
  border-radius: 50%;
`;

export const InfoNumber = styled.p`
  font-weight: ${props => props.theme.fontWeights.fw800};
  font-size: ${props => props.theme.fontSizes.fs50};
  line-height: 1.18;
`;

export const InfoTitle = styled.p`
  width: 147px;
  font-weight: ${props => props.theme.fontWeights.fw600};
  font-size: ${props => props.theme.fontSizes.fs18};
  line-height: 1.65;
  font-family: ${props => props.theme.fonts.secondary};
`;

export const InfoDecore = styled.div`
  border-radius: 50%;
  width: 189px;
  height: 189px;
  margin: 11px;
  background: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
