import styled from 'styled-components';

export const MobileWrapper = styled.div`
  position: fixed;
  background: rgba(244, 244, 244, 0.82);
  z-index: 1000;
  overflow-y: scroll;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const MobMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${props => props.theme.colors.modal};
  width: 50vw;
  height: 100%;
  z-index: 1500;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  padding: 80px 40px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

export const MobMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: ${props => props.theme.fontSizes.fs30};
  font-weight: ${props => props.theme.fontWeights.fw600};
`;

export const MobMenuClose = styled.div`
  background-color: ${props => props.theme.colors.main};
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: ${props => props.theme.colors.accent};
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