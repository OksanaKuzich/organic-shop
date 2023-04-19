import styled from 'styled-components';
import { device } from 'utiles/devices';

export const FooterWrapper = styled.div`
  padding-bottom: 140px;
  display: flex;
  flex-direction: column;
  gap: 92px;
  justify-content: center;
  color: ${props => props.theme.colors.gray};
  font-family: ${props => props.theme.fonts.secondary};
  align-items: center;

  @media ${device.tablet} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const FooterTitle = styled.p`
  font-weight: ${props => props.theme.fontWeights.fw700};
  font-size: ${props => props.theme.fontSizes.fs30};
  color: ${props => props.theme.colors.main};
  font-family: ${props => props.theme.fonts.main};
`;

export const ContactsGroup = styled.div`
  text-align: center;
  width: 241px;

  @media ${device.tablet} {
    text-align: right;
  }
`;

export const ContactsList = styled.ul`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const ContactsItem = styled.li`
  line-height: 1.65;
`;

export const ContactsName = styled.p`
  font-weight: ${props => props.theme.fontWeights.fw700};
`;

export const PagesGroup = styled.div`
  text-align: center;
  width: 190px;

  @media ${device.tablet} {
    text-align: left;
  }
`;

export const PagesList = styled.ul`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 38px;
`;

export const MessengersGroup = styled.div`
  text-align: center;
  width: 543px;
  position: relative;

  @media ${device.tablet} {
    width: 443px;

    ::before {
      content: '';
      position: absolute;
      top: 0;
      left: -42px;
      display: inline-block;
      height: 380px;
      width: 1px;
      background-color: ${props => props.theme.colors.background};
    }
    ::after {
      content: '';
      position: absolute;
      top: 0;
      right: -42px;
      display: inline-block;
      height: 380px;
      width: 1px;
      background-color: ${props => props.theme.colors.background};
    }
  }

  @media ${device.desktop} {
    width: 543px;
  }
`;

export const MessengersInfo = styled.p`
  margin-top: 23px;
  margin-bottom: 49px;
  font-family: ${props => props.theme.fonts.secondary};
  line-height: 1.65;
`;

export const MessengersList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: center;
  align-items: center;
`;

export const MessengerItem = styled.li`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${props => props.theme.colors.backgroundBtn};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background: ${props => props.theme.colors.accent};
  }
`;

export const FooterCopyright = styled.div`
  text-align: center;
  padding-top: 17px;
  padding-bottom: 16px;
  border-top: 1px solid ${props => props.theme.colors.background};
  font-family: ${props => props.theme.fonts.secondary};
`;

export const CopyrightAccent = styled.span`
  font-weight: ${props => props.theme.fontWeights.fw700};
`;
