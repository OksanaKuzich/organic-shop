import { ReactComponent as BtnDelete } from '../../images/icon/close.svg';
import { useCart } from '../../hooks/useCart';
import {
  Price,
  PricePromo,
} from '../../components/Home/Products/ProductListItem.styled';
import {
  CartListStyle,
  CartItem,
  CartImage,
  Image,
  CartProductTitle,
  CartWrapper,
  CartWrapperSumm,
  Quantity,
  QuantityInput,
  BtnWrapper,
} from './CartList.styled';

export const CartList = ({ cartLocal, setCardLocal }) => {
  const { cart, setCart } = useCart();

  const quantityToNumber = amount => {
    const newQuantity = amount !== '' ? Number.parseInt(amount) : '';
    return newQuantity;
  };

  const handleChangeQuantity = e => {
    const newQuantity = e.target.value.toString();
    const newQuantityProduct = e.target.dataset.id;
    setCardLocal(
      cartLocal.map(item => {
        if (item._id === newQuantityProduct) {
          return {
            ...item,
            quantity: newQuantity,
          };
        }
        return item;
      })
    );
  };

  const handleFocusLess = e => {
    const newQuantity = e.target.value.toString();
    const newQuantityProduct = e.target.dataset.id;
    setCart(
      cart.map(item => {
        if (item._id === newQuantityProduct) {
          return {
            ...item,
            quantity: newQuantity,
          };
        }
        return item;
      })
    );

    setCardLocal(cartLocal.filter(item => item.quantity.length !== 0));
    setCart(cart.filter(item => item.quantity.length !== 0));
  };

  const deleteProduct = e => {
    const id = e.currentTarget.dataset.id;
    setCardLocal(cartLocal.filter(item => item._id !== id));
    setCart(cart.filter(item => item._id !== id));
  };

  return (
    <CartListStyle>
      {cartLocal.map(({ _id, image, name, price, promoPrice, quantity }) => {
        return (
          <CartItem key={name}>
            <CartWrapper>
              <CartImage>
                <Image src={image} alt={name} />
              </CartImage>
              <CartProductTitle>{name}</CartProductTitle>
              {promoPrice === 0 ? (
                <PricePromo>${price}.00</PricePromo>
              ) : (
                <Price>${price}.00</Price>
              )}
              {promoPrice === 0 ? null : (
                <PricePromo>${promoPrice}.00</PricePromo>
              )}
            </CartWrapper>
            <CartWrapperSumm>
              <Quantity>Quantity:</Quantity>
              <QuantityInput
                type="number"
                value={quantityToNumber(quantity)}
                onChange={handleChangeQuantity}
                onBlur={handleFocusLess}
                data-id={_id}
                min="0"
                required
              />
              <BtnWrapper data-id={_id} onClick={deleteProduct}>
                <BtnDelete />
              </BtnWrapper>
            </CartWrapperSumm>
          </CartItem>
        );
      })}
    </CartListStyle>
  );
};
