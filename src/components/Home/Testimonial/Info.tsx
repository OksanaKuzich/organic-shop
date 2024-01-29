import React from 'react';
import { allTestimonial, TestimonialItem } from './data'; // Assuming there is a type for the data, replace 'TestimonialItem' with the actual type
import {
  InfoList,
  InfoItem,
  InfoNumber,
  InfoTitle,
  InfoDecore,
} from './Info.styled';

export const Info: React.FC = () => {
  return (
    <InfoList>
      {allTestimonial.map(({ number, title }: TestimonialItem) => (
        <InfoItem key={number}>
          <InfoDecore>
            <InfoNumber>{number}</InfoNumber>
            <InfoTitle>{title}</InfoTitle>
          </InfoDecore>
        </InfoItem>
      ))}
    </InfoList>
  );
};
