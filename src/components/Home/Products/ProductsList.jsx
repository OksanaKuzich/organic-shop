import { useEffect, useState } from 'react';
import { ProductsListItem } from './ProductListItem';
import { getAllProducts, getPopularProducts } from '../../../service/api';
import { ProductModal } from './ProductModal/ProductModal';
import { ProductsListStyle } from './ProductsList.styled';
import { Preloader } from 'components/Preloader/Preloader';
import { getOneProducts } from 'service/api';

export const ProductsList = ({
  products,
  isBtnClick,
  setIsBtnClick,
  getProducts,
  setIsNewData,
  isNewData,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idProduct, setIdProduct] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const renderProducts = async () => {
      if (isNewData) {
        if (isBtnClick) {
          await getProducts(getAllProducts);
          setIsNewData(false);
        } else {
          await getProducts(getPopularProducts);
          setIsBtnClick(false);
          setIsNewData(false);
        }
      }
    };
    renderProducts();
  }, [getProducts, isBtnClick, setIsBtnClick, isNewData, setIsNewData]);

  const handleClickBtn = async e => {
    setIdProduct(e.currentTarget.dataset.id);
    setIsLoading(true);
    const newProduct = await getOneProducts(e.currentTarget.dataset.id);
    setProduct(newProduct);
    setIsLoading(false);
    setIsModalOpen(true);
  };

  return (
    <>
      <ProductsListStyle>
        {products.map(
          ({ name, category, price, image, rate, promoPrice, _id }) => (
            <ProductsListItem
              key={name + rate}
              name={name}
              category={category}
              price={price}
              image={image}
              rate={rate}
              promoPrice={promoPrice}
              funcClick={handleClickBtn}
              id={_id}
            />
          )
        )}
      </ProductsListStyle>
      {isModalOpen && !isLoading && (
        <ProductModal
          setIsModalOpen={setIsModalOpen}
          idProduct={idProduct}
          product={product}
        />
      )}
      {isLoading && <Preloader />}
    </>
  );
};
