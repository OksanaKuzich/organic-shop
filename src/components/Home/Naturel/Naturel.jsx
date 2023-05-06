import { NaturelItem } from './NaturelItem';
import { NaturelSection } from './Naturel.styled';
import { Container } from '../../../components/Container/Container.styled';

export const Naturel = () => {
  return (
    <NaturelSection>
      <Container>
        <NaturelItem />
      </Container>
    </NaturelSection>
  );
};
