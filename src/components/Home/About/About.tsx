import { Button } from '../../Button/Button';
import { Subtitle } from '../Subtitle/Subtitle';
import { Title } from '../Title/Title';
import { useNavigate } from 'react-router-dom';
import { advantages } from './data';
import { Container } from '../../Container/Container.styled';
import {
  AboutSection,
  ImageWrapper,
  ContentWrapper,
  Content,
  AdvantagesList,
  AdvantagesItem,
  Image,
  AdvantagesWrapper,
  AdvantagesTitle,
  AdvantagesSubtitle,
} from './About.styled';

export const About = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/*', { replace: true });
  };

  return (
    <AboutSection>
      <Container>
        <ImageWrapper />
        <ContentWrapper>
          <Subtitle text={'About Us'} />
          <Title text={'We Believe in Working Accredited Farmers'} />
          <Content>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </Content>
          <AdvantagesList>
            {advantages.map(({ title, text, icon }) => (
              <AdvantagesItem key={title}>
                <AdvantagesWrapper>
                  <Image src={icon} alt="icon advantages" />
                </AdvantagesWrapper>
                <div>
                  <AdvantagesTitle>{title}</AdvantagesTitle>
                  <AdvantagesSubtitle>{text}</AdvantagesSubtitle>
                </div>
              </AdvantagesItem>
            ))}
          </AdvantagesList>
          <Button stl={'blue'} text={'Shop Now'} func={handleButtonClick} />
        </ContentWrapper>
      </Container>
    </AboutSection>
  );
};
