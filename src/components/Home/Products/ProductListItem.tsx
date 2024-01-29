import { Rate } from './Rate';
import {
  ProductCard,
  ProductCategory,
  ImageWrapper,
  Image,
  ProductName,
  DecoreEl,
  PriceWrapper,
  Price,
  PricePromo,
  Info,
} from './ProductListItem.styled';
import { RateWrapper } from './Rate.styled';

export const ProductsListItem = ({
  name,
  category,
  price,
  image,
  rate,
  promoPrice,
  funcClick,
  id,
}) => {
  return (
    <ProductCard key={name} onClick={funcClick} data-id={id}>
      <ProductCategory>{category}</ProductCategory>
      <ImageWrapper>
        <Image src={image} alt={name} />
      </ImageWrapper>
      <ProductName>{name}</ProductName>
      <DecoreEl />
      <Info>
        <PriceWrapper>
          {promoPrice === 0 ? null : <Price>${price.toFixed(2)}</Price>}
          {promoPrice === 0 ? (
            <PricePromo>${price.toFixed(2)}</PricePromo>
          ) : (
            <PricePromo>${promoPrice.toFixed(2)}</PricePromo>
          )}
        </PriceWrapper>
        <RateWrapper>
          <Rate rate={rate} />
        </RateWrapper>
      </Info>
    </ProductCard>
  );
};
