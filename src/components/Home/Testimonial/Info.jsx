import { allTestimonial } from './data';
import {
  InfoList,
  InfoItem,
  InfoNumber,
  InfoTitle,
  InfoDecore,
} from './Info.styled';

export const Info = () => {
  return (
    <InfoList>
      {allTestimonial.map(({ number, title }) => (
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
