import React from 'react';
import { Subtitle } from '../../../components/Home/Subtitle/Subtitle';
import { Title } from '../../../components/Home/Title/Title';
import { Rate } from '../../../components/Home/Products/Rate';
import reviewsImg from '../../../images/testimonial-2.png';
import { Info } from './Info';
import {
  TestimonialSection,
  Reviews,
  ReviewsImages,
  ReviewsContent,
  ReviewsName,
  ReviewsNamePosition,
  InfoWrapper,
} from './Testimonial.styled';
import { DecoreEl } from '../../../components/Home/Products/ProductListItem.styled';

const Testimonial: React.FC = () => {
  return (
    <TestimonialSection>
      <Subtitle text={'Testimonial'} />
      <Title text={'What Our Customer Saying?'} />
      <Reviews>
        <ReviewsImages src={reviewsImg} alt="Consumer" />
        <Rate rate="5" />
        <ReviewsContent>
          Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been.
        </ReviewsContent>
        <ReviewsName>Sara Taylor</ReviewsName>
        <ReviewsNamePosition>Consumer</ReviewsNamePosition>
      </Reviews>
      <InfoWrapper>
        <DecoreEl />
        <Info />
      </InfoWrapper>
    </TestimonialSection>
  );
};

export default Testimonial;
