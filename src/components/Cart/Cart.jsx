import { useCart } from '../../hooks/useCart';
import cartEmptyUrl from '../../images/cart_empty-3.jpg';
import { CartList } from './CartList';
import { useState, useEffect } from 'react';
import { Button } from '../../components/Button/Button';
import { CartForm } from './Form/CartForm';
import { Title } from '../../components/Home/Hero/Hero.styled';
import {
  CartSection,
  CartEmptyWrapper,
  CartProducts,
  TotalCart,
  TotalWrapper,
  CartBgImage,
} from './Cart.styled';

export const Cart = () => {
  const { cart } = useCart();
  const [cartLocal, setCardLocal] = useState(cart);
  const [isOrderBtnClick, setIsOrderBtnClick] = useState(false);
  const [totalCartLoc, setTotalCartLoc] = useState(0);
  const [totalCart, setTotalCart] = useState(0);
  const [discountCart, setDiscountCart] = useState(0);

  const totalCount = arr => {
    return arr.reduce((acc, { promoPrice, price, quantity }) => {
      if (promoPrice === 0) {
        return acc + Number(price) * Number(quantity);
      }
      return acc + Number(promoPrice) * Number(quantity);
    }, 0);
  };

  useEffect(() => {
    if (cart) {
      setTotalCart(totalCount(cart));
    }
    if (cartLocal) {
      setTotalCartLoc(totalCount(cartLocal));
      setDiscountCart(
        cartLocal.reduce((acc, { promoPrice, price, quantity }) => {
          if (promoPrice === 0) {
            return acc;
          }
          return acc + (Number(price) - Number(promoPrice)) * Number(quantity);
        }, 0)
      );
    }
  }, [cart, cartLocal]);

  const toOrderCart = () => {
    setIsOrderBtnClick(true);
  };

  return (
    <CartSection>
      <CartBgImage>
        <Title>Cart</Title>
      </CartBgImage>
      {totalCart === 0 ? (
        <CartEmptyWrapper>
          <img src={cartEmptyUrl} alt="cart empty" />
        </CartEmptyWrapper>
      ) : (
        <CartProducts>
          <CartList cartLocal={cartLocal} setCardLocal={setCardLocal} />
          <TotalCart>
            Total Cost: <TotalWrapper>{totalCartLoc}$</TotalWrapper>
          </TotalCart>
          {discountCart > 0 && (
            <TotalCart>
              Discount: <TotalWrapper>{discountCart}$</TotalWrapper>
            </TotalCart>
          )}
          {!isOrderBtnClick ? (
            <Button text={'To order'} stl="blue" func={toOrderCart} />
          ) : null}
          {isOrderBtnClick ? <CartForm /> : null}
        </CartProducts>
      )}
    </CartSection>
  );
};
