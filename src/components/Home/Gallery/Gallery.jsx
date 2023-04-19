import { galleryArr } from './data';
import {
  GallerySection,
  GalleryList,
  GalleryItem,
  GalleryTitle,
} from './Gallery.styled';

export const Gallery = () => {
  return (
    <GallerySection>
      <GalleryList>
        {galleryArr.map(({ image, title }) => {
          return (
            <GalleryItem key={title}>
              <img src={image} alt={title} />
              <GalleryTitle>{title}</GalleryTitle>
            </GalleryItem>
          );
        })}
      </GalleryList>
    </GallerySection>
  );
};
