import styled from 'styled-components';
import { device } from 'utiles/devices';

export const ProductsListStyle = styled.ul`
  margin: 40px auto 122px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  @media ${device.tablet} {
  }

  @media ${device.desktop} {
    justify-content: flex-start;
  }
`;
