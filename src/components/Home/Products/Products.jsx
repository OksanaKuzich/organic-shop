import { useEffect, useState } from 'react';
import { Button } from 'components/Button/Button';
import { Subtitle } from '../Subtitle/Subtitle';
import { Title } from '../Title/Title';
import { ProductsList } from './ProductsList';
import { getPopularProducts } from '../../../service/api';
import { Container } from 'components/Container/Container.styled';
import { ProductsSection } from './Products.styled';
import { Preloader } from 'components/Preloader/Preloader';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [isBtnClick, setIsBtnClick] = useState(false);
  const [isNewData, setIsNewData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const allProducts = () => {
    setIsBtnClick(!isBtnClick);
    setIsNewData(true);
  };

  const getProducts = async func => {
    setIsLoading(true);
    const newProducts = await func();
    setProducts(newProducts);
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts(getPopularProducts);
  }, []);

  return (
    <ProductsSection>
      <Container>
        <Subtitle text={'Categories'} />
        <Title text={'Our Products'} />
        <ProductsList
          products={products}
          setProducts={setProducts}
          isBtnClick={isBtnClick}
          setIsBtnClick={setIsBtnClick}
          getProducts={getProducts}
          isNewData={isNewData}
          setIsNewData={setIsNewData}
        />
        <Button
          text={isBtnClick ? 'Hide All' : 'Load More'}
          stl={'blue'}
          func={allProducts}
        />
        {isLoading && <Preloader />}
      </Container>
    </ProductsSection>
  );
};
