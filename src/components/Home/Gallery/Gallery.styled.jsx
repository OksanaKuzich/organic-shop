import styled from 'styled-components';
import { device } from 'utiles/devices';

export const GallerySection = styled.section`
  padding-top: 187px;
  padding-bottom: 187px;
  margin-left: auto;
  margin-right: auto;
  background: ${props => props.theme.colors.gallery};
`;

export const GalleryList = styled.ul`
  display: flex;
  gap: 42px;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const GalleryItem = styled.li`
  position: relative;
`;

export const GalleryTitle = styled.p`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 316px;
  height: 96px;
  border-radius: 20px;
  font-weight: ${props => props.theme.fontWeights.fw500};
  font-size: ${props => props.theme.fontSizes.fs25};
  background: ${props => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;
