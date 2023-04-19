import { useEffect, useState } from 'react';
import { Subtitle } from '../Subtitle/Subtitle';
import { Title } from '../Title/Title';
import { getRandomProducts } from 'service/api';
import { ProductsListItem } from '../Products/ProductListItem';
import { Container } from 'components/Container/Container.styled';
import { OfferSection, RandomList } from './Offer.styled';

export const Offer = () => {
  const [randomProduct, setrandomProduct] = useState([]);

  useEffect(() => {
    const getProducts = async func => {
      const newProducts = await getRandomProducts();
      setrandomProduct(newProducts);
    };
    getProducts();
  }, []);

  return (
    <OfferSection>
      <Container>
        <Subtitle text={'Offer'} />
        <Title text={'We Offer Organic For You'} />
        <RandomList>
          {randomProduct.map(
            ({ name, category, price, image, rate, promoPrice }) => (
              <ProductsListItem
                key={name}
                name={name}
                category={category}
                price={price}
                image={image}
                rate={rate}
                promoPrice={promoPrice}
              />
            )
          )}
        </RandomList>
      </Container>
    </OfferSection>
  );
};
