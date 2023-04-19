import { createPortal } from 'react-dom';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useEffect } from 'react';
import { ReactComponent as BtnClose } from '../../images/icon/close.svg';
import {
  MobileWrapper,
  MobMenu,
  MobMenuList,
  MobMenuClose,
  NavItem,
} from './MobileMenu.styled';

const modalRoot = document.querySelector('#modal-root');
const body = document.getElementsByTagName('body')[0];

export const MobileMenu = ({ setIsOpenMobMenu }) => {
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      setIsOpenMobMenu(false);
    }
  };

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      setIsOpenMobMenu(false);
    }
  };
  useEffect(() => {
    disableBodyScroll(body);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      enableBodyScroll(body);
    };
  });

  const handleCloseMobileMenu = () => {
    setIsOpenMobMenu(false);
  };

  return createPortal(
    <MobileWrapper onClick={handleBackdropClick}>
      <MobMenu>
        <nav>
          <MobMenuList>
            <NavItem>Home</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Pages</NavItem>
            <NavItem>Shop</NavItem>
            <NavItem>Projects</NavItem>
            <NavItem>News</NavItem>
          </MobMenuList>
        </nav>
        <MobMenuClose onClick={handleCloseMobileMenu}>
          <BtnClose />
        </MobMenuClose>
      </MobMenu>
    </MobileWrapper>,
    modalRoot
  );
};
