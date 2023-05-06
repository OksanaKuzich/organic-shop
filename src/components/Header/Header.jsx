import { ReactComponent as Logo } from '../../images/icon/logo.svg';
import { ReactComponent as SearchIcon } from '../../images/icon/search.svg';
import { ReactComponent as BasketIcon } from '../../images/icon/basket.svg';
import { useCart } from '../../hooks/useCart';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MobileMenu } from '../../components/MobileMenu/MobileMenu';
import {
  HeaderSection,
  NavList,
  Search,
  SearchBtn,
  BasketBtn,
  BasketWrapper,
  BntWrapper,
  Label,
  AccentAmount,
  IconMobile,
  NavItem,
} from './Header.styled';

export const Header = () => {
  const { amount } = useCart();
  const [isOpenMobMenu, setIsOpenMobMenu] = useState(false);

  const handleClickMobileMenu = () => {
    setIsOpenMobMenu(true);
  };

  return (
    <HeaderSection>
      <Link to="/">
        <Logo />
      </Link>
      <nav>
        <NavList>
          <NavItem>Home</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Pages</NavItem>
          <NavItem>Shop</NavItem>
          <NavItem>Projects</NavItem>
          <NavItem>News</NavItem>
        </NavList>
      </nav>
      <BntWrapper>
        <IconMobile onClick={handleClickMobileMenu} />
        <Label>
          <Search />
          <SearchBtn>
            <SearchIcon />
          </SearchBtn>
        </Label>
        <BasketBtn to="/cart">
          <BasketWrapper>
            <BasketIcon />
          </BasketWrapper>
          <div>
            Cart (
            {amount === 0 ? amount : <AccentAmount>{amount}</AccentAmount>})
          </div>
        </BasketBtn>
      </BntWrapper>
      {isOpenMobMenu && <MobileMenu setIsOpenMobMenu={setIsOpenMobMenu} />}
    </HeaderSection>
  );
};
