import React from 'react';
import { NaturelItem } from './NaturelItem';
import { NaturelSection } from './Naturel.styled';
import { Container } from '../../Container/Container.styled';

export const Naturel: React.FC = () => {
  return (
    <NaturelSection>
      <Container>
        <NaturelItem />
      </Container>
    </NaturelSection>
  );
};
