import { Button } from '../../Button/Button';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../Container/Container.styled';
import { HeroSection, Subtitle, Title } from './Hero.styled';

export const Hero = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/*', { replace: true });
  };

  return (
    <HeroSection>
      <Container>
        <Subtitle>100% Natural Food</Subtitle>
        <Title>Choose the best healthier way of life</Title>
        <Button
          text={'Explore Now'}
          type="button"
          stl={'blue'}
          func={handleButtonClick}
        ></Button>
      </Container>
    </HeroSection>
  );
};
