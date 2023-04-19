import { Button } from 'components/Button/Button';
import { Container } from 'components/Container/Container.styled';
import { HeroSection, Subtitle, Title } from './Hero.styled';

export const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <Subtitle>100% Natural Food</Subtitle>
        <Title>Choose the best healthier way of life</Title>
        <Button text={'Explore Now'} type="button" stl={'blue'}></Button>
      </Container>
    </HeroSection>
  );
};
