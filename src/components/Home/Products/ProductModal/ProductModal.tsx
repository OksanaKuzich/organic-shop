import { createPortal } from 'react-dom';
import { Rate } from '../Rate';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useEffect, useState } from 'react';

import { ReactComponent as BtnClose } from '../../../../images/icon/close.svg';
import { Button } from '../../../Button/Button';
import { useCart } from '../../../../hooks/useCart';
import {
  Wrapper,
  Modal,
  ImageSt,
  ImageWrapper,
  ModalInfo,
  CloseBtn,
  ModalTitle,
  ModalDetalis,
  ModalPriceWrapper,
  ModalShortDescr,
  ModalLabel,
  ModalInput,
  MoreInfo,
  DescriptionInfo,
  ButtonDescrInfo,
} from './ProductModal.styled';
import { Price, PricePromo, ProductCategory } from '../ProductListItem.styled';

const body = document.getElementsByTagName('body')[0];
const modalRoot = document.querySelector('#modal-root');

export const ProductModal = ({ setIsModalOpen, idProduct, product }) => {
  const [isDescrShow, setIsDescrShow] = useState(true);
  const { addToCart } = useCart();

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      setIsModalOpen(false);
    }
  };

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      setIsModalOpen(false);
    }
  };

  const handleClickBtn = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    disableBodyScroll(body);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      enableBodyScroll(body);
    };
  });

  const handleClickDescrToggle = () => {
    setIsDescrShow(!isDescrShow);
  };

  const formSubmit = async e => {
    e.preventDefault();
    const quantity = e.target.elements.quantity.value;
    await addToCart(idProduct, product, quantity);
    setIsModalOpen(false);
  };

  return createPortal(
    <Wrapper onClick={handleBackdropClick}>
      <Modal>
        <ModalInfo>
          <ImageWrapper>
            <ImageSt src={product.image} alt={product.image} />
            <ProductCategory>{product.category}</ProductCategory>
          </ImageWrapper>
          <ModalDetalis>
            <ModalTitle>{product.name}</ModalTitle>
            <Rate rate={product.rate} />
            <ModalPriceWrapper>
              {product.promoPrice === 0 ? null : (
                <Price>${product.price}.00</Price>
              )}
              {product.promoPrice === 0 ? (
                <PricePromo>${product.price}.00</PricePromo>
              ) : (
                <PricePromo>${product.promoPrice}.00</PricePromo>
              )}
            </ModalPriceWrapper>
            <ModalShortDescr>{product.shortDescr}</ModalShortDescr>
            <form onSubmit={formSubmit}>
              <ModalLabel>
                Quantity:
                <ModalInput
                  type="text"
                  name="quantity"
                  placeholder="0"
                  pattern="^[ 0-9]+$"
                  min="0"
                  maxLength="1000"
                  required
                />
              </ModalLabel>
              <Button text={'Add To Cart'} stl="blue" type="submit" />
            </form>
          </ModalDetalis>
          <CloseBtn type="button" onClick={handleClickBtn}>
            <BtnClose />
          </CloseBtn>
        </ModalInfo>
        <MoreInfo>
          <ButtonDescrInfo
            onClick={handleClickDescrToggle}
            type="button"
            style={{
              backgroundColor: isDescrShow ? '#274C5B' : '#EFF6F1',
              color: isDescrShow ? '#fff' : '#274C5B',
            }}
          >
            Product Description
          </ButtonDescrInfo>
          <ButtonDescrInfo
            onClick={handleClickDescrToggle}
            type="button"
            style={{
              backgroundColor: !isDescrShow ? '#274C5B' : '#EFF6F1',
              color: !isDescrShow ? '#fff' : '#274C5B',
            }}
          >
            Additional Info
          </ButtonDescrInfo>
          {isDescrShow ? (
            <DescriptionInfo>{product.description}</DescriptionInfo>
          ) : (
            <DescriptionInfo>{product.additionalInfo}</DescriptionInfo>
          )}
        </MoreInfo>
      </Modal>
    </Wrapper>,
    modalRoot
  );
};
