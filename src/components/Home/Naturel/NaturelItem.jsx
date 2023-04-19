import { naturelCards } from './data';
import {
  CardWrapper,
  CardItem,
  ContentWrapper,
  CardSubtitle,
  CardTitle,
} from './NaturelItem.styled';

export const NaturelItem = () => {
  return (
    <CardWrapper>
      {naturelCards.map(item => (
        <CardItem key={item.subtitle}>
          <ContentWrapper>
            <CardSubtitle>{item.subtitle}</CardSubtitle>
            <CardTitle>{item.title}</CardTitle>
          </ContentWrapper>
        </CardItem>
      ))}
    </CardWrapper>
  );
};
