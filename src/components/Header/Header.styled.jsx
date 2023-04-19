import styled from 'styled-components';
import { device } from 'utiles/devices';
import { Link } from 'react-router-dom';
import { ReactComponent as IconMobMenu } from '../../images/icon/menu-burger.svg';

export const HeaderSection = styled.header`
  padding: 30px;
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes.fs20};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

  @media ${device.tablet} {
    padding: 50px 40px;
    max-width: 1200px;
  }

  @media ${device.desktop} {
    padding: 69px 162px;
    max-width: 1596px;
  }
`;

export const NavList = styled.ul`
  display: none;
  cursor: pointer;

  @media ${device.tablet} {
    display: flex;
    gap: 20px;
  }

  @media ${device.desktop} {
    gap: 50px;
  }
`;

export const NavItem = styled.li`
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: ${props => props.theme.colors.accent};
    transform: scale(1.1);
  }
`;

export const Search = styled.input`
  background: ${props => props.theme.colors.search};
  border-radius: 36px;
  border: none;
  font-size: ${props => props.theme.fontSizes.fs18};
  color: ${props => props.theme.colors.main};
  padding-left: 20px;
  display: none;

  @media ${device.desktop} {
    width: 376px;
    height: 66px;
    display: block;
  }
`;

export const Label = styled.label`
  position: relative;
  opacity: 0;

  @media ${device.desktop} {
    opacity: 1;
  }
`;

export const SearchBtn = styled.div`
  position: absolute;
  top: 5px;
  right: 6px;
  background: ${props => props.theme.colors.accent};
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;

  @media ${device.desktop} {
    opacity: 1;
  }
`;

export const BasketBtn = styled(Link)`
  width: 159px;
  height: 66px;
  border: 1px solid #e0e0e0;
  border-radius: 33px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 5px 6px;
  font-size: ${props => props.theme.fontSizes.fs18};
  font-weight: ${props => props.theme.fontWeights.fw600};
  color: ${props => props.theme.colors.main};
`;

export const BasketWrapper = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${props => props.theme.colors.main};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

export const BntWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;

  @media ${device.tablet} {
    gap: 18px;
  }
`;

export const AccentAmount = styled.span`
  color: rgb(255, 0, 0);
`;

export const IconMobile = styled(IconMobMenu)`
  width: 56px;
  height: 56px;
  border-radius: 10px;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: ${props => props.theme.colors.accent};
  }
  @media ${device.tablet} {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;
