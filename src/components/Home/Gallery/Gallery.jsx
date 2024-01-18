import React from 'react';
import { galleryArr, GalleryItemData } from './data'; // Assuming there is a type for the data, replace 'GalleryItemData' with the actual type
import {
  GallerySection,
  GalleryList,
  GalleryItem,
  GalleryTitle,
} from './Gallery.styled';

export const Gallery: React.FC = () => {
  return (
    <GallerySection>
      <GalleryList>
        {galleryArr.map(({ image, title }: GalleryItemData) => (
          <GalleryItem key={title}>
            <img src={image} alt={title} />
            <GalleryTitle>{title}</GalleryTitle>
          </GalleryItem>
        ))}
      </GalleryList>
    </GallerySection>
  );
};
