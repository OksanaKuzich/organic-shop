import React from 'react';
import { naturelCards, NaturelCardData } from './data'; // Assuming there is a type for the data, replace 'NaturelCardData' with the actual type
import {
  CardWrapper,
  CardItem,
  ContentWrapper,
  CardSubtitle,
  CardTitle,
} from './NaturelItem.styled';

export const NaturelItem: React.FC = () => {
  return (
    <CardWrapper>
      {naturelCards.map((item: NaturelCardData) => (
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
