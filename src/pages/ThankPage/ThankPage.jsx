import { Title } from '../../components/Home/Hero/Hero.styled';
import { ThankPageSection, Image } from './ThankPage.styled';
import thankImage from '../../images/thank.jpg';

const ThankPage = () => {
  return (
    <main>
      <ThankPageSection>
        <Title>Thank you for your order</Title>
        <Image src={thankImage} alt="Thank you for your order" />
      </ThankPageSection>
    </main>
  );
};

export default ThankPage;
